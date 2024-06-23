"use client";
import React from "react";
import { portfolioProjects } from "../data";
import Image from "next/image";
import PortfolioGrid from "../shared/portfolioGrid";
import { IServiceDetailProps } from "./service";

const ExploreSomeOfOurprojects: React.FC<IServiceDetailProps> = ({
  serviceDetails,
}) => {
  return (
    <div className="mx-auto py-16 lg:py-24 lg:px-8 lg:mt-40 w-full bg-[#004AAD]">
      <div className="mx-auto max-w-7xl  text-[#fff]">
        <div className="col-span-2 w-full lg:w-[713px] lg:mt-5">
          <h3 className="text-[#FFFFFF] text-[28px] lg:text-[64px] leading-[38px] lg:leading-[82px] text-start font-bold hidden lg:block">
            Explore some of our Web Design projects
          </h3>
          <h2
            className="text-[28px] lg:text-[64px] text-center leading-[38px] lg:leading-[74px] font-semibold text-white mb-[64px] lg:hidden">
            See some of our works here
          </h2>
        </div>
        <div className="mt- lg:mt-20 lg:ml-5 lg:h-[460px] overflow-hidden">
          <PortfolioGrid />
        </div>
      </div>
      <button className="mx-auto flex items-center justify-between w-[130px] h-[48px] bg-transparent border-[0.5px] border-[#FFFFFF] rounded-full px-6 mt-16">
        <Image src={"Vector-4.svg"} alt="" width={15.5} height={4} />
        <span className="text-[12px] leading-[13px] text-[#FFFFFF]">
          See More
        </span>
      </button>
    </div>
  );
};

export default ExploreSomeOfOurprojects;
