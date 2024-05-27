import CardStack from '@/components/portfolio-v2/cardStack';
import Project from '@/components/portfolio-v2/project';
import SeeMoreProjects from '@/components/portfolio-v2/seeMoreProjects';
import SidePanel from '@/components/portfolio-v2/sidePanel';
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betw bg-[#1B1B1E]">
      <Project />
      <CardStack />
      <SidePanel />
      <SeeMoreProjects />
    </main>
  );
}