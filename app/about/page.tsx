import React from 'react'
import ServicesSection from "@/components/home/services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ServicesSection />

    </main>
  );
}