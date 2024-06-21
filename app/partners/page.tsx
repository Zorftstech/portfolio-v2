import React from "react";
import OurPartners from "@/components/partners/ourPartners";
import WhatOurPartnersSaid from "@/components/partners/whatOurPartnersSaid";
import BenefitOfParnership from "@/components/partners/benefitOfPartnership";
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";

export default function Partners() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopAndBottomWrapper>
        <OurPartners />
        <SideWrapper>
          <WhatOurPartnersSaid />
          <BenefitOfParnership />
        </SideWrapper>
      </TopAndBottomWrapper> 
    </main>
  );
}
