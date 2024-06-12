"use client";
import React from "react";
// import { portfolioProjects } from "../data";
// import Image from "next/image";
import PortfolioGrid from "./portfolioGrid";

const PortfolioSection: React.FC = () => {
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
        <PortfolioGrid />
      </div>
    </div>
  );
};

export default PortfolioSection;
