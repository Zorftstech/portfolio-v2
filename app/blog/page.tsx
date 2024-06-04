import Blogs from "@/components/blog/blogs";
import { TopAndBottomWrapper } from "@/components/shared/Wrappers";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopAndBottomWrapper>
        <Blogs />
      </TopAndBottomWrapper>
    </main>
  );
}
