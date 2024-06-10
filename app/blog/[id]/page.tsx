// import Blogs from "@/components/blog/blogs";
import BlogDetail from "@/components/blogDetails/owner";
import Blogs from "@/components/blog/blogs";
import React from "react";
import Post from "@/components/blogDetails/post";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[10rem]">
        <BlogDetail />
        <Post />
        <Blogs />
    </main>
  );
}