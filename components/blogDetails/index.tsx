"use client";
import React, { useEffect, useState } from "react";
import RelatedTopics from "./relatedTopics";
import Post from "./post";
import BlogDetail from "./owner";
import { useSearchParams } from "next/navigation";
import { fetchSingleBlogPost } from "@/lib/apis/request";
import { IBlog } from "@/lib/types";
import Link from "next/link";

const SingleBlog = () => {
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");
  const [blogDetails, setBlogDetails] = useState<IBlog>();
  const [isLoading, setIsLoading] = useState(true);
  const [isBlogNotFound, setIsBlogNotFound] = useState(false);

  useEffect(() => {
    if (blogId !== null) {
      fetchSingleBlogPost(blogId).then((res) => {
        if (res?.success) {
          setBlogDetails(res?.data);
        } else {
          setIsBlogNotFound(true);
        }
      });
    } else {
      setIsBlogNotFound(true);
    }
  }, [blogId]);

  if (isBlogNotFound) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-[64px] leading-[72px] font-semibold text-[#004AAD] tracking-tight">
            Blog not found
          </p>

          <p className="mt-2 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the blog you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-3xl flex flex-row gap-2 bg-[#004AAD] py-3 px-8 text-white"
            >
              Go back
            </Link>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <BlogDetail blogDetails={blogDetails} />
        <Post content={blogDetails?.content || ""} />
        <RelatedTopics />
      </main>
    );
  }
};

export default SingleBlog;
