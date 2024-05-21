import CardStack from '@/components/portfolio-v2/cardStack';
import MyFoodAngels from '@/components/portfolio-v2/myFoodAngel';
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betw bg-[#1B1B1E]">
      <MyFoodAngels />
      <CardStack />
    </main>
  );
}