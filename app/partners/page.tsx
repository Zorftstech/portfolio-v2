import React from 'react'
import OurPartners from '@/components/partners/ourPartners';
import WhatOurPartnersSaid from '@/components/partners/whatOurPartnersSaid';
import BenefitOfParnership from '@/components/partners/benefitOfPartnership';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <OurPartners />
      <WhatOurPartnersSaid />
      <BenefitOfParnership />
    </main>
  );
}