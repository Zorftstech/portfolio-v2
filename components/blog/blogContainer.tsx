"use client";
import React from "react";
import Blogs from "./blogs";

function BlogCard() {
  return (
    <div className="lg:py-24 mb-8">
      <h3 className="text-[50px] leading-[80px] text-[#3B3D3F] font-bold px-5 lg:px-8 tracking-tight">
        Blog
      </h3>
      <Blogs />
    </div>
  );
}

export default BlogCard;
