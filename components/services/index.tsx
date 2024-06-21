"use client";
import { IService } from "@/lib/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import ExploreSomeOfOurprojects from "./exploreSomeOfOurProjects";
import WhatOurCustomersSay from "./whatOurCustomersSay";
import TechnologiesWeUse from "../home/technologies";
import AlternateCard from "./alternateCards";
import ServiceDetail from "./service";
import Solution from "./solution";
import { fetchSingleService } from "@/lib/apis/request";

const ServiceInnerPageComp = () => {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("id");
  const [serviceDetails, setServiceDetails] = useState<IService>();
  const [isLoading, setIsLoading] = useState(true);
  const [isServiceNotFound, setIsServiceNotFound] = useState(false);

  useEffect(() => {
    if (serviceId !== null) {
      fetchSingleService(serviceId).then((res) => {
        if (res?.success) {
          setServiceDetails(res?.data);
        } else {
          setIsServiceNotFound(true);
        }
      });
    } else {
      setIsServiceNotFound(true);
    }
  }, [serviceId]);

  if (isServiceNotFound) {
    return (
      <div className="text-center pt-40 ">
        <p className="text-[64px] leading-[72px] font-semibold text-[#004AAD] tracking-tight">
          Service not found
        </p>

        <p className="mt-2 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the Service you’re looking for.
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
        <ServiceDetail serviceDetails={serviceDetails} />
        <Solution serviceDetails={serviceDetails} />
        <AlternateCard serviceDetails={serviceDetails} />
        <TechnologiesWeUse />
        <WhatOurCustomersSay />
        <ExploreSomeOfOurprojects serviceDetails={serviceDetails} />
      </>
    );
  }
};

export default ServiceInnerPageComp;

export function ServiceInnerPage() {
  return (
    <Suspense>
      <ServiceInnerPageComp />
    </Suspense>
  );
}
