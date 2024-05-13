import React from 'react'
import ServicesSection from "@/components/home/services";
import Image from "next/image";
import AboutUs from '@/components/about/aboutUs';
import Mission from '@/components/about/mission';
import SlideShow from '@/components/about/slideShow';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AboutUs />
      <Mission />
      <ServicesSection />
    </main>
  );
}