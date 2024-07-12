"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { partners } from "../data";
import { IPartnerTestimonial } from "@/lib/types";
import { fetchPartnersTestimonials } from "@/lib/apis/request";
import Skeleton from "react-loading-skeleton";
import { FaUser } from "react-icons/fa6";

const WhatOurPartnersSaid: React.FC = () => {
  const [partnersTestimonials, setPartnersTestimonials] = useState<
    IPartnerTestimonial[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPartnersTestimonials().then((res) => {
      if (res?.success) {
        setPartnersTestimonials(res?.data.testimonials);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <div className="my-20 md:mt-40 lg:my-8 w-full">
      <h2 className="text-2xl md:text-4xl lg:text-5xl leading-[38px] lg:leading-[52px] font-bold text-[#004AAD] md:text-center">
        What our Partners said
      </h2>
      {partnersTestimonials?.length !== 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-9 lg:mt-28">
          {partnersTestimonials?.map((partner, index) => (
            <div key={index} className="flex gap-10 w-full">
              <Image
                src={partner.image || ""}
                alt={partner.name}
                width={80}
                height={80}
                className="rounded-full lg:w-[101px] lg:h-[101px] object-cover hidden lg:block"
              />
              <p className="text-[18px] leading-[26px] text-[#5F5E6C]">
                {partner.comment}
                <span className="flex items-center gap-5 text-[#5F5E6C] font-bold mt-3">
                  <Image
                    src={partner.image || ""}
                    alt={partner.name}
                    width={80}
                    height={80}
                    className="rounded-full lg:w-[101px] lg:h-[101px] object-contain lg:hidden"
                  />
                  {partner.name}
                </span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <LoadingState />
      )}
    </div>
  );
};

export default WhatOurPartnersSaid;

const LoadingState = () => {
  const filledArray = new Array(2).fill("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 mt-10 lg:mt-28">
      {filledArray.map((_, itemIndex) => (
        <div key={itemIndex} className="w-full">
          <div className="flex gap-4 w-full items-center">
            <FaUser className="text-6xl hidden md:block text-[#e0e0e0]" />
            <div className="text-[16px] leading-[26px] w-full">
              <Skeleton count={5} />
              <div className="flex items-center gap-5 font-bold mt-3">
                <FaUser className="text-6xl block md:hidden text-[#e0e0e0]" />
                <div className="w-full">
                  <Skeleton className="h-[28px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
