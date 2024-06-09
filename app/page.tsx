import AchievementsSection from "@/components/home/achievements";
import FaqSection from "@/components/home/faq";
import HeroSection from "@/components/home/hero";
import PartnersSection from "@/components/home/partners";
import PortfolioSection from "@/components/home/portfolio";
import ServicesSection from "@/components/home/services";
import TechnologiesWeUse from "@/components/home/technologies";
import TestimonialCard from "@/components/home/testimonialCard";
import WhyChooseUs from "@/components/home/whyChooseUs";
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopAndBottomWrapper>
        <SideWrapper>
          <HeroSection />
          <PartnersSection />
          <AchievementsSection />
          <ServicesSection />
          <WhyChooseUs />
          <PortfolioSection />
          <TechnologiesWeUse />
          <TestimonialCard />
          <FaqSection />
        </SideWrapper>
      </TopAndBottomWrapper>
    </main>
  );
}
