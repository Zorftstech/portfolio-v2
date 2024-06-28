import SingleProjectPage from "@/components/portfolio-v2";
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";
import React from "react";

export default function Home() {
  return (
    <main className="bg-[#1B1B1E]">
      <TopAndBottomWrapper>
        <div className="bg-[#1B1B1E]">
          <SideWrapper>
            <SingleProjectPage />
          </SideWrapper>
        </div>
      </TopAndBottomWrapper>
    </main>
  );
}
