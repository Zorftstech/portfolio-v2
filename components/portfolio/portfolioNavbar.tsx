"use client";
import React, { useState, useEffect } from "react";
import { useAppContext } from "@/lib/context";
import PortfolioGrid from "../shared/portfolioGrid";
import Image from "next/image";
import { IProjectData } from "@/lib/types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const projectTypes = ["All", "Design", "Development", "Deployment", "Others"];

const PortfolioNavbar: React.FC = () => {
  const { store } = useAppContext();
  const { projects } = store;
  const [activeButton, setActiveButton] = useState<number>(0);
  const [currentProjects, setCurrentProjects] = useState<IProjectData[]>([]);
  useEffect(() => {
    setCurrentProjects(projects);
  }, [projects]);

  const handleButtonClick = (type: string, index: number) => {
    setActiveButton(index);
    if (type === "All") {
      setCurrentProjects(projects);
    }

    if (index >= 1) {
      const filteredProjects = projects?.filter((project) =>
        project.tags.some(
          (tag) => tag.name.toLowerCase() === type.toLowerCase()
        )
      );

      setCurrentProjects(filteredProjects);
    }
  };
  return (
    <div className="">
      <div className="my-8 lg:my-24 overflow-x-auto w-full">
        <div className="flex items-center md:justify-center w-[710px] md:w-full">
          {projectTypes.map((type, typeIndex) => (
            <div key={typeIndex} className="flex">
              <button
                onClick={() => handleButtonClick(type, typeIndex)}
                className={`text-sm lg:text-base leading-[24px] border-[1px] rounded-full px-4 lg:px-5 py-4 lg:py-5 mx-3 min-w-[130px] ${
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
      </div>
      <div className="mx-auto my-8 lg:my-24">
        {/* =========== portfolio grid ============= */}
        {projects?.length !== 0 ? (
          <PortfolioGrid projects={currentProjects} />
        ) : (
          <ProjectsLoadingState />
        )}
        <button className="mx-auto flex items-center justify-between w-[152px] h-[48px] bg-[#454646] rounded-full px-6 mt-20">
          <Image src={"Vector-4.svg"} alt="" width={15.5} height={4} />
          <span className="text-white">Load More</span>
        </button>
      </div>
    </div>
  );
};

export default PortfolioNavbar;

export const ProjectsLoadingState = () => {
  return (
    <SkeletonTheme baseColor="#313134" highlightColor="#666">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
        <Skeleton className="h-[300px]" />
        <Skeleton className="h-[300px]" />
      </div>
    </SkeletonTheme>
  );
};
