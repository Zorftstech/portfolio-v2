"use client";
import React from "react";
import Image from "next/image";
import { IServiceDetailProps } from "./service";

const Solution: React.FC<IServiceDetailProps> = ({ serviceDetails }) => {
  return (
    <div className="mx-auto flex flex-col max-w-7xl items-start justify-center px-8 w-full sm:w-[428px] md:w-[805px] lg:w-[1280px] mt-7 md:mt-16 lg:mt-32">
      <div className="sm:w-[380px] md:w-[720px] lg:w-[798px] h-[] lg:h-[317px]">
        <div className="">
          <h1 className="text-2xl sm:text-2xl lg:text-[40px] leading-[38px] text-[#004AAD] font-bold mb-8 ">
            {serviceDetails?.sub_title}
          </h1>
          <p className="text-[18px] lg:text-[20px] leading-[28px] text-[#5F5E6C] mb-8">
            {serviceDetails?.sub_description}
          </p>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap justify-between w-[100%] md:w-[53%] lg:w-[50%]">
          <div className="bg-[#E6EDF7] px-3 py-5 sm:py-1 rounded-[214px] text-[12px] leading-[16.1px] flex flex-row items-center cursor-pointer">
            <Image src="/Vector-3.svg" alt="icon" width={15.5} height={4} />
            <a href="/" className="mx-2 lg:mx-3">
              Request Development Service
            </a>
          </div>
          <div className="bg-[transparent] rounded-[214px] text-[12px] sm:ml-2 p-[16px] flex flex-row items-center cursor-pointer">
            <Image src="/Vector-3.svg" alt="icon" width={15.5} height={4} />
            <a href="/" className="mx-3">
              Get a Date
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
