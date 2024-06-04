import React from "react";
import ServicesSection from "@/components/home/services";
import Image from "next/image";
import MeetTheTeam from "@/components/about/meetTheTeam";
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";

export default function Home() {
  return (
    <main>
      <TopAndBottomWrapper>
        <SideWrapper>
          <ServicesSection />
          <MeetTheTeam />
        </SideWrapper>
      </TopAndBottomWrapper>
    </main>
  );
}
