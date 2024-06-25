"use client";
import React from "react";
import Image from "next/image";
import PortfolioGrid from "../shared/portfolioGrid";
import { useAppContext } from "@/lib/context";

const PortfolioSection: React.FC = () => {
  const { store } = useAppContext();
  const { projects } = store;

  return (
    <div className="w-[100%] bg-[#004AAD]">
      <div className="py-24 lg:px-8 mb-8 ">
        <h2
          className="text-[28px] lg:text-[64px] text-center leading-[38px] lg:leading-[74px] font-semibold text-white mb-[64px]
                "
        >
          See some of our works here
        </h2>

        {/* =========== portfolio grid ============= */}
        <PortfolioGrid projects={projects} />
        <button className="mx-auto flex items-center justify-between w-[130px] h-[48px] bg-transparent border-[0.5px] border-[#FFFFFF] rounded-full px-6 mt-20">
          <Image src={"Vector-4.svg"} alt="" width={15.5} height={4} />
          <span className="text-[12px] leading-[13px] text-[#FFFFFF]">
            See More
          </span>
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;
