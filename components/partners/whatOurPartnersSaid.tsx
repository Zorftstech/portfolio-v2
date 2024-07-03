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
    <div className="my-20 md:mt-40 lg:my-8 w-full">
      <h2 className="text-2xl md:text-4xl lg:text-5xl leading-[38px] lg:leading-[52px] font-bold text-[#004AAD] md:text-center">
        What our Partners said
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-9 lg:mt-28">
        {partnersTestimonials?.map((partner, index) => (
          <div
            key={index}
            className="flex gap-10 w-full"
          >
            <Image
              src={partner.image || ""}
              alt={partner.name}
              width={80}
              height={80}
              className="rounded-full lg:w-[101px] lg:h-[101px] object-cover hidden md:block"
            />
            <p className="text-[18px] leading-[26px] text-[#5F5E6C] col-span-3">
              {partner.comment}
              <span className="flex items-center gap-5 text-[#5F5E6C] font-bold mt-3">
              <Image
                src={partner.image || ""}
                alt={partner.name}
                width={80}
                height={80}
                className="rounded-full lg:w-[101px] lg:h-[101px] object-cover md:hidden"
              />
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
