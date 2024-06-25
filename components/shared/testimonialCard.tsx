"use client";
import React from "react";
import Image from "next/image";
import { ITestimonialData } from "@/lib/types";
interface ITestimonialCardProps {
  testimonies: ITestimonialData[];
}

const TestimonialCard: React.FC<ITestimonialCardProps> = ({ testimonies }) => {
  return (
    <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-4 lg:py-24 my-8 lg:px-8">
      {testimonies?.map((testimony) => (
        <div
          key={testimony?.id}
          className="bg-[#F8F8F8] rounded-[26px] w-[385px] lg:w-[400px] h-[fit-content] p-4"
        >
          <div className="flex flex-row items-center">
            <Image
              src={testimony?.image || "./userImage.svg"}
              alt="User Image"
              width={60}
              height={60}
            />
            <h1 className="text-[26px] text-[#5F5E6C] font-bold ml-4">
              {testimony?.name}
            </h1>
          </div>
          <p className="text-[20px] text-[#5F5E6C]">{testimony?.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
