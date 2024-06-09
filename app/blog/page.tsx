import Blogs from "@/components/blog/blogs";
import { TopAndBottomWrapper } from "@/components/shared/Wrappers";
import BlogCard from "@/components/blog/blogCard";

import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopAndBottomWrapper>
        <BlogCard />
      </TopAndBottomWrapper>
    </main>
  );
}
