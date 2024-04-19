import AchievementsSection from "@/components/home/achievements";
import HeroSection from "@/components/home/hero";
import PartnersSection from "@/components/home/partners";
import Services from "@/components/home/services";
import TechnologiesWeUse from "@/components/home/technologies";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      <PartnersSection />
      <AchievementsSection />
    </main>
  );
}
