import React from 'react'
import ServicesSection from "@/components/home/services";
import AboutUs from '@/components/about/aboutUs';
import Mission from '@/components/about/mission';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AboutUs />
      <Mission />
      <ServicesSection />
    </main>
  );
}