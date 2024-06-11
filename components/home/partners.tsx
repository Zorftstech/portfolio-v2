"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaArrowRight } from "react-icons/fa";
import { partnersLogo } from "../data";

const PartnersSection: React.FC = () => {
  return (
    <div className="py-24 mb-8">
      <div className="w-[100%] lg:w-[60%] mb-8">
        <h3 className="text-[#3B3D3F] text-4xl lg:text-[64px] leading-[38px] tracking-tight text-start lg:leading-[74px] font-semibold">
          At Zorft Technologies, we&apos;re more than just a tech company
        </h3>
        <p className="text-[18px] lg:text-2xl leading-[28px] lg:leading-[30px] text-start text-[#8f8f92] max-w-[550px] tracking-tight mt-5">
          We&#x201A;re your strategic partner in unlocking the full potential of
          your digital presence.
        </p>
      </div>
      <Marquee>
        {partnersLogo.map((partner) => (
          <div key={partner.id} className="px-4">
            <Image
              src={partner.src}
              width={150}
              height={30}
              alt={partner.name}
              className="object-fit"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PartnersSection;
