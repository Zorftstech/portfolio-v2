import AchievementsSection from "@/components/home/achievements";
import HeroSection from "@/components/home/hero";
import PartnersSection from "@/components/home/partners";
import PortfolioSection from "@/components/home/portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <PartnersSection />
      <AchievementsSection />
      <PortfolioSection />
    </main>
  );
}
