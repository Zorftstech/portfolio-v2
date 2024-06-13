"use client";
import React, { useEffect, useState } from "react";
import { portfolioProjects } from "../data";
import Image from "next/image";
import { fetchProjects } from "@/lib/apis/request";
import { extractYear } from "@/lib/helpers/extractYearfromDateString";
import Link from "next/link";
import { IProjectData } from "@/lib/types";
import { RiCircleFill } from "react-icons/ri";
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
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-x-12 gap-y-10 text-[#fff] px-8">
          {projects?.slice(0, 4).map((project) => (
            <div key={project.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-transparent lg:aspect-none group-hover:scale-104 lg:h-100">
                <Image
                  src={project.image || ""}
                  alt={project?.brand_name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-base text-white font-semibold leading-5">
                    <Link href={project?.slug}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project?.brand_name}
                    </Link>
                  </h3>
                  <div className="mt-1 text-sm text-white">
                    <div className="flex gap-2">
                      {project?.tags?.map((tag, tagIndex) => (
                        <span
                          className="capitalize flex items-center gap-1"
                          key={tagIndex}
                        >
                          <RiCircleFill className="text-[8px] text-white/80" />
                          {tag?.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-white">
                  {extractYear(project?.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
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
