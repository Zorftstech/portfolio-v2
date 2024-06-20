import React from "react";
import Image from "next/image";
import { partners } from "../data";

const WhatOurPartnersSaid: React.FC = () => {
  return (
    <div className="my-8 w-full">
      <h2 className="text-[28px] lg:text-[64px] leading-[38px] lg:leading-[52px] font-bold text-[#004AAD] text-center lg:mb-[150px]">
        What our Partners said
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[97px] lg:gap-y-[97px]">
        {partners.slice(0, 4).map((partner, index) => (
          <div
            key={index}
            className="grid grid-cols-4 w-[380px] lg:w-[556px] h-[145px] lg:h-[119px] my-5"
          >
            <Image
              src={partner.src_2}
              alt={partner.name}
              width={80}
              height={80}
              className="rounded-full lg:w-[101px] lg:h-[101px]"
            />
            <p className="text-[18px] leading-[26px] text-[#5F5E6C] col-span-3">
              {partner.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatOurPartnersSaid;
