import ServiceDetail from '@/components/services/service';
import React from 'react'
import AlternateCard from '@/components/services/alternateCards';
import TechnologiesWeUse from '@/components/home/technologies';
import { TopAndBottomWrapper } from '@/components/shared/Wrappers';
import WhatOurCustomersSay from '@/components/services/whatOurCustomersSay';
import ExploreSomeOfOurprojects from '@/components/services/exploreSomeOfOurProjects';
import Solution from '@/components/services/solution';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        {/* <TopAndBottomWrapper> */}
        <ServiceDetail />
        <Solution />
        <AlternateCard />
        <TechnologiesWeUse />
        <WhatOurCustomersSay />
        <ExploreSomeOfOurprojects />
        {/* </TopAndBottomWrapper> */}
    </main>
  );
}
