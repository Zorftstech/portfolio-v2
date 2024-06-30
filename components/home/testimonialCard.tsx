"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchTestimonials } from "@/lib/apis/request";
import { ITestimonialData } from "@/lib/types";

const TestimonialCard: React.FC = () => {
  const [data, setData] = useState<ITestimonialData[]>([]);

  useEffect(() => {
    fetchTestimonials().then((res) => {
      setData(res?.data.results);
    });
  }, []);
  return (
    <div className="mx-auto flex flex-wrap md:flex-nowrap gap-4 md:gap-7 lg:py-24 my-8">
      {data?.map((testimony) => (
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
          <p className="text-lg lg:text-xl text-[#5F5E6C]">{testimony?.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
