import React from "react";
import ServicesSection from "@/components/home/services";
import MeetTheTeam from "@/components/about/meetTheTeam";
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";
import AboutUs from "@/components/about/aboutUs";
import Mission from "@/components/about/mission";

export default function Home() {
  return (
    <main>
      <TopAndBottomWrapper>
        <SideWrapper>
          <AboutUs />
          <Mission />
          <ServicesSection />
          <MeetTheTeam />
        </SideWrapper>
      </TopAndBottomWrapper>
    </main>
  );
}
