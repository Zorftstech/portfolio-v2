import FormSection from "@/components/contact/Form";
import InfoSection from "@/components/contact/Info";
import AchievementsSection from "@/components/home/achievements";
import FaqSection from "@/components/home/faq";
import HeroSection from "@/components/home/hero";
import PartnersSection from "@/components/home/partners";
import PortfolioSection from "@/components/home/portfolio";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <InfoSection />
        <FormSection />
    </main>
  );
}