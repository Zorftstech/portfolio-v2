import AboutUs from "@/components/about/aboutUs";
import Mission from "@/components/about/mission";
import AchievementsSection from "@/components/home/achievements";
import FaqSection from "@/components/home/faq";
import HeroSection from "@/components/home/hero";
import PartnersSection from "@/components/home/partners";
import PortfolioSection from "@/components/home/portfolio";
import ServicesSection from "@/components/home/services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <AboutUs />
        <Mission />
        <ServicesSection />
    </main>
  );
}