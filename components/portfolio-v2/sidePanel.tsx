"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { portfolioProjects, Solution } from "../data";
import { IProjectInformationProps } from "./project";

const SidePanel: React.FC<IProjectInformationProps> = ({ project }) => {
  return (
    <div className="mx-auto flex max-w-7xl items-star justify-between mt-5 lg:mt-28 lg:px-12 w-full">
      <div className="ml-10 hidden lg:block">
        <div className="flex justify-between w-[200px] relative">
          <div className="h-[430px] w-[3px] bg-[#363636]">
            <div
              id="indicator"
              className="h-[50px] bg-[#D1D1D1] mt-3"
              // style={{
              //   transform: `translateY(${activeIndex * 175}px)`,
              //   transition: "transform 0.3s ease-in-out",
              // }}
            ></div>
          </div>
          <div className="flex flex-col justify-between py-5">
            {/* {solutions.map((portfolio: Solution, index: number) => (
              <div key={portfolio.id} className="ml-[-170px]">
                <button
                  className="text-[24px] leading-[40px] text-[#68686C] font-bold"
                  onClick={() => handleButtonClick(index)}
                >
                  {portfolio.title}
                </button>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <div className="grid gap-16 lg:gap-32 lg:border-[1px] border-[#464649] rounded-3xl w-[510px] lg:w-[687px] p-8 lg:p-12">
        {/* {solutions.map((portfolio: Solution) => (
          <div key={portfolio.id}>
            <h4 className="text-[32px] leading-[38px] text-[#E2E2E2] font-bold mb-8">
              {portfolio.title}
            </h4>
            <p className="text-[19px] leading-[29px] text-[#9897A7] w-[380px] lg:w-[530px]">
              {portfolio.description}
            </p>
            <Image
              src={portfolio.img}
              alt=""
              width={500}
              height={257.91}
              className="object-cover mt-20 lg:w-[596px] lg:h-[463px]"
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SidePanel;
