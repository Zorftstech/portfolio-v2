"use client";
import React from "react";
import TestimonialCard from "../shared/testimonialCard";
import { useAppContext } from "@/lib/context";

const Testimonials: React.FC = () => {
  const { store } = useAppContext();
  const { testimonials } = store;

  return (
    <div className="mb-8 mt-16 lg:mt-40 w-full">
      <div className="flex justify-start items-center">
        <h4 className="text-center bg-[#F2F2F2] p-2 rounded-lg text-[#9C9AA1] w-[130px]">
          Testimonials
        </h4>
      </div>

      {/* ============= Section description ============= */}
      <h3 className="text-[#3B3D3F] text-2xl md:text-4xl lg:text-[64px] lg:leading-[78px] text-start font-bold mt-10 max-w-[350px] md:max-w-[500px] lg:max-w-[800px] tracking-tight">
        What they said about us from the people we shared experiences with.
      </h3>

      <TestimonialCard testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
