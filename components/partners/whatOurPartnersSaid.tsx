"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { partners } from "../data";
import { IPartnerTestimonial } from "@/lib/types";
import { fetchPartnersTestimonials } from "@/lib/apis/request";

const WhatOurPartnersSaid: React.FC = () => {
  const [partnersTestimonials, setPartnersTestimonials] = useState<
    IPartnerTestimonial[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPartnersTestimonials().then((res) => {
      setPartnersTestimonials(res?.data.testimonials);
      setIsLoading(false);
    });
  }, []);

  console.log(partnersTestimonials);

  return (
    <div className="my-8 w-full">
      <h2 className="text-[28px] lg:text-[64px] leading-[38px] lg:leading-[52px] font-bold text-[#004AAD] text-center lg:mb-[150px]">
        What our Partners said
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[97px] lg:gap-y-[97px]">
        {partnersTestimonials?.map((partner, index) => (
          <div
            key={index}
            className="grid grid-cols-4 w-[380px] lg:w-[556px] h-[145px] lg:h-[119px] my-5"
          >
            <Image
              src={partner.image || ""}
              alt={partner.name}
              width={80}
              height={80}
              className="rounded-full lg:w-[101px] lg:h-[101px] object-cover"
            />
            <p className="text-[18px] leading-[26px] text-[#5F5E6C] col-span-3">
              {partner.comment}
              <span className="text-[#5F5E6C] font-bold block mt-3">
                {partner.name}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatOurPartnersSaid;
