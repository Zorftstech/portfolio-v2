"use client";
import React, { useEffect, useState } from "react";
import CardStack from "@/components/portfolio-v2/cardStack";
import MoreProjects from "@/components/portfolio-v2/seeMoreProjects";
import SidePanel from "@/components/portfolio-v2/sidePanel";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { fetchSingleProject } from "@/lib/apis/request";
import { IProjectData } from "@/lib/types";
import ProjectInformation from "@/components/portfolio-v2/project";
import FullScreenLoader from "../loadingStates/fullScreenLoader";

const SingleProjectPage = () => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");
  const [projectDetails, setProjectDetails] = useState<IProjectData>();
  const [isLoading, setIsLoading] = useState(true);
  const [isProjectNotFound, setIsProjectNotFound] = useState(false);

  useEffect(() => {
    if (projectId !== null && projectId !== "") {
      fetchSingleProject(projectId).then((res) => {
        if (res?.success) {
          setProjectDetails(res?.data);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        } else {
          setIsProjectNotFound(true);
        }
      });
    } else {
      setIsProjectNotFound(true);
    }
  }, [projectId]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (isProjectNotFound) {
    return (
      <div className="text-center py-40">
        <p className="text-[64px] leading-[72px] font-semibold text-gray-300 tracking-tight">
          Project not found
        </p>

        <p className="mt-2 text-base leading-7 text-gray-300">
          Sorry, we couldn’t find the Project you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-3xl flex flex-row gap-2 bg-[#004AAD] py-3 px-8 text-white"
          >
            Go back
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <ProjectInformation project={projectDetails} />
        <CardStack project={projectDetails} />
        <SidePanel project={projectDetails} />
        <MoreProjects project={projectDetails} />
      </>
    );
  }
};

export default SingleProjectPage;
