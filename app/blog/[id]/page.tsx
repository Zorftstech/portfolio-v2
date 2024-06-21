import React from "react";
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";
import SingleBlog from "@/components/blogDetails";

export default function Home() {
  return (
    <TopAndBottomWrapper>
      <SideWrapper>
        <SingleBlog />
      </SideWrapper>
    </TopAndBottomWrapper>
  );
}
