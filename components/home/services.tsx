"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useAppContext } from "@/lib/context";
import hyphenateSpaces from "@/lib/helpers/hyphenateSpaces";
import { ServiceLearnMore } from "@/lib/svgs";
import Skeleton from "react-loading-skeleton";

const ServicesSection: React.FC = () => {
  const { store } = useAppContext();
  const { services } = store;
  // State to track the index of the service being hovered over
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center mt-28 lg:mt-64 w-full">
      {/* ============= Section description ============= */}
      <h2
        className="text-[28px] sm:text-4xl md:text-5xl lg:text-7xl leading-[38px]
        font-bold text-[#004AAD] text-center mb-4 md:mb-8 lg:mb-12 tracking-tighter"
      >
        Services that we provide
      </h2>
      <p className="text-lg lg:text-xl text-[#5F5E6C] text-center lg:px-36 tracking-[-0.015em]">
        At Zorfts Technologies Ltd, we propel innovation forward and deliver
        top-tier technology solutions that empower businesses to excel in the
        digital era. Fueled by a passion for excellence and a commitment to
        customer success, we offer a wide range of services tailored to meet the
        unique needs of our clients.
      </p>

      {/* ============= Services grid ============= */}
      <div className="overflow-x-auto lg:overflow-visible mt-12 lg:mt-20 px- lg:ml-auto w-full sm:w-[21.938rem] lg:w-full">
        <div>
          {services?.length !== 0 ? (
            <div className="grid grid-cols-10 lg:grid-cols-3 gap-x-96 lg:gap-10 lg:w-full">
              {services?.map((service, index) => (
                <div
                  key={service.id}
                  className="hover-effect border-2 rounded-3xl border-gray-200 px-5 py-8 mb-6 lg:mb-0 min-w-[21.938rem] cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index when mouse enters
                  onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index when mouse leaves
                >
                  {/* ============= Service info ============= */}
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-700 mb-4">
                    {service.main_title}
                  </h4>
                  <p className="text-sm lg:text-base text-[#5F5E6C] min-h-40 tracking-tight">
                    {service?.main_description}
                  </p>
                  <div className="flex justify-between w-2/5 lg:w-1/3 mt-5 items-center">
                    <ServiceLearnMore
                      color={hoveredIndex === index ? "#E6EDF7" : "#424247"}
                    />

                    <Link
                      href={`/services/${hyphenateSpaces(service.name)}?id=${
                        service.id
                      }`}
                      className="text-[#424247] cursor-pointer no-underline tracking-tight"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ServiceLoadingState />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

const ServiceLoadingState = () => {
  return (
    <div className="w-full">
      <Skeleton className=" h-[240px]" />
    </div>
  );
};
