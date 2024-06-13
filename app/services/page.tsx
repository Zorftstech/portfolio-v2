import CyberSolution from '@/components/services/solution';
import ServiceDetail from '@/components/services/service';
import React from 'react'
import AlternateCard from '@/components/services/alternateCards';
import TechnologiesWeUse from '@/components/home/technologies';
import TestimonialCard from '@/components/home/testimonialCard';
import PortfolioSection from '@/components/home/portfolio';
import { TopAndBottomWrapper } from '@/components/shared/Wrappers';
import WhatOurPartnersSaid from '@/components/partners/whatOurPartnersSaid';
import WhatOurCustomersSay from '@/components/services/whatOurCustomersSay';
import ExploreSomeOfOurprojects from '@/components/services/exploreSomeOfOurProjects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        {/* <TopAndBottomWrapper> */}
        <ServiceDetail />
        <CyberSolution />
        <AlternateCard />
        <TechnologiesWeUse />
        <WhatOurCustomersSay />
        <ExploreSomeOfOurprojects />
        {/* </TopAndBottomWrapper> */}
    </main>
  );
}
