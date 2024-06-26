"use client";
import React, { useEffect, useState } from "react";
import Blogs from "./blogs";
import { useAppContext } from "@/lib/context";
import { fetchBlogPosts } from "@/lib/apis/request";

function BlogCard() {
  const { store } = useAppContext();
  const { blogs, setBlogs } = store;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="lg:py-16 mb-8">
      <h3 className="text-[50px] leading-[80px] text-[#3B3D3F] font-bold px-5 lg:px-8 tracking-tight">
        Blogs
      </h3>
      <Blogs blogs={blogs} />
    </div>
  );
}

export default BlogCard;
