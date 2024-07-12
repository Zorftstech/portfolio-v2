"use client";
import React, { useEffect, useState } from "react";
import SlideShow from "./slideShow";
import { valuesData } from "../data";

const Mission: React.FC = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center py-0 mt-8 lg:mt-24 w-full">
      <div className="grid lg:grid-cols-2 w-full">
        <div className="">
          <h4 className="text-[18px] md:text-[26px] leading-[23px] text-[#8F8F92] bg-[#F2F2F2] lg:bg-white px-3 py-3 lg:py-5 lg:px-0 rounded-xl w-fit">
            Mission
          </h4>
          <h2 className="text-[32px] md:text-[38px] lg:text-[48px] leading-[45px] lg:leading-[64px] font-bold text-[#004AAD] w-full mt-8">
            Our Mission is pretty straightforward
          </h2>
        </div>
        <SlideShow />
      </div>
      <div className="grid xl:grid-cols-2 gap-10 lg:gap-0 mt-24 lg:mt-32 w-full">
        <div className="">
          <h2 className="text-[32px] md:text-[38px] lg:text-[48px] leading-[45px] lg:leading-[64px] font-bold text-[#004AAD] my-3">
            Values
          </h2>
          <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[30px] text-[#5F5E6C] lg:w-[390px] lg:h-[150px] tracking-[-0.02em]">
            We prioritize building trust and exceeding client expectations
            through transparency, honesty, and a commitment to their success.
          </p>
        </div>
        <ul className="list-disc grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 ml-5 lg:ml-0 tracking-[-0.02em] mt-10">
          {valuesData.map((item, index) => (
            <li
              key={index}
              className="text-[#5F5E6C] lg:w-[287px] lg:h-[124px]"
            >
              <h4 className="font-bold text-[20px] leading-[31px]">
                {item.title}
              </h4>
              <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[30px]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mission;
