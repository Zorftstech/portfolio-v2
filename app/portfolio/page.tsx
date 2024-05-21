import PortfolioGrid from '@/components/portfolio/portfolioGrid';
import PortfolioNavbar from '@/components/portfolio/portfolioNavbar';
import SomeOfOurWork from '@/components/portfolio/someOfOurWork';
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#1B1B1E]">
      <SomeOfOurWork />
      <PortfolioNavbar />
      <PortfolioGrid />
    </main>
  );
}