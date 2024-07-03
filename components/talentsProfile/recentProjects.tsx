"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IRecentProjects } from "../talents/data";

export interface RecentProjectsProps {
  recentProjects: IRecentProjects[] | undefined;
}

const RecentProjects: React.FC<RecentProjectsProps> = ({ recentProjects }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-28 md:mt-48">
      <h2 className="text-[#004AAD] text-4xl md:text-5xl font-bold md:self-start">Recent Projects</h2>
      <div className="flex flex-wrap md:flex-nowrap items-center gap-5 mt-10 md:mt-16">
        {recentProjects && recentProjects.map((project) => (
          <Link key={project.id} className="relative rounded-xl" href={'/'}>
            <Image
              width={380}
              height={380}
              className="object-contain md:w-[400px] md:h-[400px]"
              src={project.img}
              alt="link-img"
            />
            <div className="absolute inset-0 flex items-end bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl">
              <p className="p-5 text-white">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-[#004AAD] px-[34px] py-[12px] md:py-[16px] w-full md:w-fit rounded-[214px] text-[12px] leading-[16.1px] flex items-center justify-center cursor-pointer mt-16">
        <Image src="/Vector-4.svg" alt="icon" width={15.5} height={4} />
        <a href="/" className="mx-2 lg:mx-3 text-white  text-[14px]">
          Hire
        </a>
      </div>
    </div>
  );
};

export default RecentProjects;
