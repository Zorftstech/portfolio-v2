import Blogs from "@/components/blog/blogs";
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";
import BlogCard from "@/components/blog/blogContainer";

import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopAndBottomWrapper>
        <SideWrapper>
          <BlogCard />
        </SideWrapper>
      </TopAndBottomWrapper>
    </main>
  );
}
