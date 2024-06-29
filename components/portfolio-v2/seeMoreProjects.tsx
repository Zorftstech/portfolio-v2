"use client";
import React from "react";
import Image from "next/image";
import { portfolioProjects, SeeMoreProjects } from "../data";
import { IProjectInformationProps } from "./project";
import PortfolioGrid from "../shared/portfolioGrid";
import { useAppContext } from "@/lib/context";
import { getRandomTwoItems } from "@/lib/helpers/randomTwoItemsFromArray";

const MoreProjects: React.FC<IProjectInformationProps> = ({ project }) => {
  const { store } = useAppContext();
  const { projects } = store;

  return (
    <div className="px-8 py-8 lg:px-8">
      <h2 className="text-[40px] py-28 leading-[52px] font-bold text-[#E2E2E2]">
        See More Projects
      </h2>
      <PortfolioGrid projects={getRandomTwoItems(projects)} />
    </div>
  );
};

export default MoreProjects;
