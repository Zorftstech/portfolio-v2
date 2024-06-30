// import PortfolioGridDark from "@/components/portfolio/portfolioGridDark";
import PortfolioNavbar from "@/components/portfolio/portfolioNavbar";
import SomeOfOurWork from "@/components/portfolio/someOfOurWork";
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";
import React from "react";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#1B1B1E]">
      <TopAndBottomWrapper>
        <SideWrapper>
          <SomeOfOurWork />
          <PortfolioNavbar />
          {/* <PortfolioGridDark /> */}
        </SideWrapper>
      </TopAndBottomWrapper>
    </main>
  );
}
