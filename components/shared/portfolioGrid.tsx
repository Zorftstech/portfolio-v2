"use client";
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiCircleFill } from "react-icons/ri";
import { extractYear } from "@/lib/helpers/extractYearfromDateString";
import { useAppContext } from "@/lib/context";
import { SideWrapper } from "./Wrappers";
import { IProjectData } from "@/lib/types";

interface IPortfolioGridProps {
  projects: IProjectData[];
}

const PortfolioGrid: React.FC<IPortfolioGridProps> = ({ projects }) => {
 
  return (
    <SideWrapper>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 text-[#fff]">
        {projects?.map((project) => (
          <Link
            href={`/portfolio/${project.slug}?id=${project.id}`}
            key={project.id}
            className="group relative"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-transparent lg:aspect-none group-hover:scale-104 lg:h-100">
              <Image
                src={project.image || ""}
                alt={project?.brand_name}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-t-[30px] rounded-b-[10px] max-h-[412px]"
                width={100}
                height={100}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-base text-white font-semibold leading-5">
                  <p>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {project?.brand_name}
                  </p>
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
          </Link>
        ))}
      </div>
      {/* <button className='mx-auto flex items-center justify-between w-[130px] h-[48px] bg-transparent border-[0.5px] border-[#FFFFFF] rounded-full px-6 mt-20'> 
                <Image src={'Vector-4.svg'} alt='' width={15.5} height={4} />
                <span className='text-[12px] leading-[13px] text-[#FFFFFF]'>See More</span>
        </button> */}
    </SideWrapper>
  );
};

export default PortfolioGrid;
