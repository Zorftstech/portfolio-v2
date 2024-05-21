import AchievementsSection from "@/components/home/achievements";
import FaqSection from "@/components/home/faq";
import HeroSection from "@/components/home/hero";
import PartnersSection from "@/components/home/partners";
import PortfolioSection from "@/components/home/portfolio";
import ServicesSection from "@/components/home/services";
import TechnologiesWeUse from "@/components/home/technologies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <PartnersSection />
      <AchievementsSection />
      <ServicesSection />
      <PortfolioSection />
      <TechnologiesWeUse />
      <FaqSection />
    </main>
  );
}
