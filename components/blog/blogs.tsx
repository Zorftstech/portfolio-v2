"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { blogs } from "../data";
import { useAppContext } from "@/lib/context";
import { fetchBlogPosts } from "@/lib/apis/request";
import { IBlog } from "@/lib/types";
import hyphenateSpaces from "@/lib/helpers/hyphenateSpaces";

function Blogs() {
  const { store } = useAppContext();
  const { blogs, setBlogs } = store;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchBlogPosts().then((res) => {
      setBlogs(res?.data.results);
    });
  }, [setBlogs]);

  return (
    <div className="mx-auto mt-12 grid max-w-lg gap-y-10 gap-x-5 lg:max-w-7xl grid-cols-2 lg:grid-cols-3 px-5 lg:px-8 mb-8">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;

const BlogItem = ({ blog }: { blog: IBlog }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Create a new DOM element to hold the HTML string
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = blog.content;

      // Extract the first child element
      const firstElement = tempDiv.firstElementChild;

      // Clear the container and append the first element
      if (firstElement) {
        const truncatedText =
          firstElement.textContent?.substring(0, 85) + "..." || "";
        containerRef.current.innerHTML = truncatedText;
      }
    }
  }, [blog.content]);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl shadow">
      <div className="flex-shrink-0">
        <Image
          width={500}
          height={192}
          className="max-h-[300px] w-full object-cover rounded-2xl"
          src={blog?.cover_image || ""}
          alt="blog-img"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1 overflow-hidden">
          <Link
            href={`/blog/blog?id=${blog?.id}`}
            className="mt-2 block  h-[120px] lg:h-full text-[#5F5E6C] tracking-tight"
          >
            <p className="text-xl font-semibold">{blog?.title}</p>
            <div
              ref={containerRef}
              className="text-[16px] leading-[24px] mt-3 text-base"
            ></div>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <Link
            className="text-[#004AAD] underline capitalize font-semibold"
            href={`/blog/title=${hyphenateSpaces(blog?.title)}?id=${blog?.id}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
