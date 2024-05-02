import React from 'react'
import Image from "next/image";
import OurPartners from '@/components/partners/ourPartners';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <OurPartners />

    </main>
  );
}