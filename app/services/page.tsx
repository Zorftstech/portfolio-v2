import CyberSolution from '@/components/services/solution';
import ServiceDetail from '@/components/services/service';
import React from 'react'
import AlternateCard from '@/components/services/alternateCards';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <ServiceDetail />
        <CyberSolution />
        <AlternateCard />
    </main>
  );
}