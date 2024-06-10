"use client";
import React, { useEffect, useState } from "react";
import { whyChooseUs } from "../data";
import { IWhyChoseUseData } from "@/lib/types";
import { fetchWhyChooseZorfts } from "@/lib/apis/request";

const WhyChooseUs: React.FC = () => {
  const [data, setData] = useState<IWhyChoseUseData[]>([]);

  useEffect(() => {
    fetchWhyChooseZorfts().then((res) => {
      setData(res?.data.results);
    });
  }, []);

  // Initialize the hoveredIndex to 0 to show the first item's content on page load
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  // Find the currently hovered reason, if any
  const hoveredReason = data[hoveredIndex];

  return (
    <div className="mx-auto flex flex-col items-center justify-center max-w-7xl px-24 my-8 lg:px-8 lg:py-24 w-full">
      <h2 className="text-[24px] leading-[27.6px] text-[#004AAD] font-bold self-start">
        Why Choose Zorfts?
      </h2>
      <div className="flex flex-wrap items-center justify-between w-full mt-5 lg:mt-28 lg:ml-5">
        <div className="bg-[#336EBD] w-[430px] px-9 py-12 self-start rounded-3xl mt-6">
          <h2 className="text-[18px] lg:text-[20px] leading-[26px] text-[#FFFFFF] font-bold">
            {hoveredReason?.subject}
          </h2>
          <p className="text-[16px] leading-[26px] text-[#FFFFFF] font-normal mt-3">
            {hoveredReason?.description}
          </p>
        </div>
        <div className="flex flex-col">
          {data?.map((reason, index) => (
            <div
              key={reason.id}
              onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index when mouse enters
              onMouseLeave={() => setHoveredIndex(0)} // Reset hovered index to 0 when mouse leaves
              className="cursor-pointer my-2 justify-self-start lg:ml-[-650px]"
            >
              <ul className="mt-5 lg:mt-0">
                <li
                  className="text-[20px] lg:text-[44px] leading-[24px] lg:leading-[52.8px] text-[#D0D0D0] font-medium py-2 lg:py-5"
                  style={{
                    color: hoveredIndex === index ? "#004AAD" : "#D0D0D0",
                  }}
                >
                  {reason.subject}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
