import AchievementsSection from "@/components/home/achievements";
import FaqSection from "@/components/shared/faq";
import HeroSection from "@/components/home/hero";
import PartnersSection from "@/components/home/partners";
import PortfolioSection from "@/components/home/portfolio";
import ServicesSection from "@/components/home/services";
import TechnologiesWeUse from "@/components/home/technologies";
import Testimonials from "@/components/home/testimonials";
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
        </SideWrapper>
        <PortfolioSection />
        <TechnologiesWeUse />
        <SideWrapper>
          <Testimonials />
          <FaqSection />
        </SideWrapper>
      </TopAndBottomWrapper>
    </main>
  );
}
