"use client";
import React, { useState, useEffect } from "react";
import { portfolioProjects, PortfolioProject } from "../data";
import { useAppContext } from "@/lib/context";
import PortfolioGrid from "../shared/portfolioGrid";
import Image from "next/image";
import { IProjectData } from "@/lib/types";

interface PortfolioItem {
  id: number;
  navItem: string;
}

const projectTypes = ["All", "Design", "Development", "Deployment", "Others"];

const PortfolioNavbar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };
  const { store } = useAppContext();
  const { projects } = store;

  const [currentProjects, setCurrentProjects] =
    useState<IProjectData[]>(projects);

  return (
    <div className="">
      <div className="mx-auto my-8 lg:my-24 overflow-scroll lg:overflow-hidden w-[387px] lg:w-[1050px]">
        <div className="flex items-center justify-start w-[1012px] lg:w-[1102px]">
          {projectTypes.map((type, typeIndex) => (
            <div key={typeIndex} className="flex">
              <button
                onClick={() => handleButtonClick(typeIndex)}
                className={`text-[16px] leading-[24px] border-[1px] rounded-full px-5 lg:px-5 py-5 mx-4 min-w-[120px] ${
                  activeButton === typeIndex
                    ? "bg-[#004AAD] text-white border-blue-500"
                    : "bg-[] text-[#9897A7] border-[#3B3D3F]"
                }`}
                aria-label={`Navigate to ${type}`}
              >
                {type}
              </button>
            </div>
          ))}
        </div>

        <div className="mx-auto">
          <PortfolioGrid projects={currentProjects} />
          <button className="mx-auto flex items-center justify-between w-[152px] h-[48px] bg-[#454646] rounded-full px-6 mt-20">
            <Image src={"Vector-4.svg"} alt="" width={15.5} height={4} />
            <span className="text-white">Load More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioNavbar;
