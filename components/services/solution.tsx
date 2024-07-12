"use client";
import React from "react";
import Image from "next/image";
import { IServiceDetailProps } from "./service";
import Link from "next/link";

const Solution: React.FC<IServiceDetailProps> = ({ serviceDetails }) => {
  return (
    <div className="flex flex-col items-start justify-center w-full sm:w-[428px] lg:w-[805px] mt-16 lg:mt-32">
      <div className="w-full sm:w-[500px] md:w-[720px] lg:w-[798px] h-[] lg:h-[317px]">
        <div className="">
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] leading-[38px] text-[#004AAD] font-bold mb-8 tracking-tight">
            {serviceDetails?.sub_title}
          </h1>
          <p className="text-[18px] lg:text-[20px] leading-[28px] text-[#5F5E6C] mb-8">
            {serviceDetails?.sub_description}
          </p>
        </div>
        <div className="flex gap-2 sm:gap-6">
          <div
            className="bg-[#E6EDF7] px-3 py-5 sm:py-1 rounded-[214px] text-[12px] leading-[16.1px]
            flex flex-row items-center cursor-pointer border-[#B0C7E6] border"
          >
            <Image src="/Vector-3.svg" alt="icon" width={15.5} height={4} />
            <Link
              href="/"
              className="mx-2 lg:mx-3 text-xs sm:text-base text-[#424247]"
            >
              Request Service
            </Link>
          </div>
          <div className="bg-[transparent] rounded-[214px] text-[12px] sm:ml-2 p-[16px] flex flex-row items-center cursor-pointer">
            <Image src="/Vector-3.svg" alt="icon" width={15.5} height={4} />
            <Link href="/" className="mx-3 text-xs sm:text-base text-[#3B3D3F]">
              Get a Date
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
