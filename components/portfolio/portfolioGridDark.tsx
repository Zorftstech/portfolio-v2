"use client";
import Image from "next/image";
import React from "react";
import { useAppContext } from "@/lib/context";
import PortfolioGrid from "../shared/portfolioGrid";

const PortfolioGridDark: React.FC = () => {
  const { store } = useAppContext();
  const { projects } = store;
  
  return (
    <div className="mx-auto">
      <PortfolioGrid projects={projects} />
      <button className="mx-auto flex items-center justify-between w-[152px] h-[48px] bg-[#454646] rounded-full px-6 mt-20">
        <Image src={"Vector-4.svg"} alt="" width={15.5} height={4} />
        <span className="text-white">Load More</span>
      </button>
    </div>
  );
};

export default PortfolioGridDark;