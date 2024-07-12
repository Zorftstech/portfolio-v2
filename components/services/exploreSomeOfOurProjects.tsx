"use client";
import React from "react";
import { portfolioProjects } from "../data";
import Image from "next/image";
import PortfolioGrid from "../shared/portfolioGrid";
import { IServiceDetailProps } from "./service";
import { useAppContext } from "@/lib/context";
import { SideWrapper } from "../shared/Wrappers";
import { ProjectsLoadingState } from "../home/portfolio";

const ExploreSomeOfOurprojects: React.FC<IServiceDetailProps> = ({
  serviceDetails,
}) => {
  const { store } = useAppContext();
  const { projects } = store;

  return (
    <div className="py-16 lg:py-24 md:px-8 lg:mt-40 w-full bg-[#004AAD]">
      <SideWrapper>
        <div className="text-[#fff]">
          <div className="col-span-2 w-full md:w-[410px] lg:w-[713px] md:mt-5">
            <h3 className="text-[#FFFFFF] text-2xl md:text-4xl lg:text-[60px] leading-[38px] lg:leading-[70px] text-start font-bold">
              Explore some of our Web Design projects
            </h3>
          </div>
          {/* <div className="mt- md:mt-20 lg:ml-5 lg:h-[460px] overflow-hidden"> */}
          {/* =========== portfolio grid ============= */}
          {projects?.length !== 0 ? (
            <PortfolioGrid projects={projects} />
          ) : (
            <ProjectsLoadingState />
          )}
          {/* </div> */}
        </div>
        <button className="mx-auto flex items-center justify-between w-[130px] h-[48px] bg-transparent border-[0.5px] border-[#FFFFFF] rounded-full px-6 mt-16">
          <Image src={"/Vector-4.svg"} alt="" width={15.5} height={4} />
          <span className="text-[12px] leading-[13px] text-[#FFFFFF]">
            See More
          </span>
        </button>
      </SideWrapper>
    </div>
  );
};

export default ExploreSomeOfOurprojects;
