"use client";
import { IProjectData } from "@/lib/types";
import React, { useEffect, useState } from "react";

export interface IProjectInformationProps {
  project: IProjectData | undefined;
}

const ProjectInformation: React.FC<IProjectInformationProps> = ({
  project,
}) => {
  return (
    <>
      <div className="flex items-star justify-center flex-col px-8 py-20 lg:px-12 w-full">
        <div key={project?.id} className="lg:w-[1100px] lg:h-[193px]">
          <h2 className="text-[32px] lg:text-[72px] leading-[45px] lg:leading-[80px] font-bold text-[#E2E2E2]">
            {project?.brand_name}
          </h2>
          <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[40px] font-normal text-[#9897A7] mt-10 lg:w-[900px]">
            At Zorft Technologies, we believe in the power of collaboration. Our
            strategic partnerships play a pivotal role in driving innovation and
            delivering exceptional solutions to our clients.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectInformation;
