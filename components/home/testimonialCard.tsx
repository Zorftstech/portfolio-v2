"use client";
import React from "react";
import Image from "next/image";

import { useAppContext } from "@/lib/context";
import Skeleton from "react-loading-skeleton";

const TestimonialCard: React.FC = () => {
  const { store } = useAppContext();
  const { testimonials } = store;

  return (
    <React.Fragment>
      {testimonials.length !== 0 ? (
        <div className="mx-auto flex flex-wrap md:flex-nowrap gap-4 md:gap-7 lg:py-24 my-8">
          {testimonials?.map((testimony) => (
            <div
              key={testimony?.id}
              className="bg-[#F8F8F8] rounded-[26px] sm:w-[21.938rem] lg:w-[400px] h-[fit-content] p-4"
            >
              <div className="flex flex-row items-center">
                <Image
                  src={testimony?.image || ""}
                  alt="User Image"
                  width={60}
                  height={60}
                />
                <h1 className="text-2xl text-[#5F5E6C] font-bold ml-4">
                  {testimony?.name}
                </h1>
              </div>
              <p className="text-lg lg:text-xl text-[#5F5E6C]">
                {testimony?.comment}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <TestimonialLoadingState />
      )}
    </React.Fragment>
  );
};

export default TestimonialCard;

const TestimonialLoadingState = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
      <Skeleton className="h-[200px]" />
      <Skeleton className="h-[200px]" />
    </div>
  );
};
