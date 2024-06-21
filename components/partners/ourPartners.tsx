"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppContext } from "@/lib/context";

const OurPartners: React.FC = () => {
  const { store } = useAppContext();
  const { partners } = store;
  return (
    <div className="">
      <div className="ourPartner w-[428px] lg:w-full h-[224px] lg:h-[600px] mx-auto flex justify-center bg-cover bg-center lg:rounded-b-[100px] lg:-mt-16">
        <div className="w-[380px] lg:w-[758px] h-[143px] lg:h-[156px] self-end text-center mb-5">
          <h2 className="text-[32px] lg:text-[64px] leading-[45px] lg:leading-[80px] font-bold text-[#FFFFFF]">
            Our Partners
          </h2>
          <p className="lg:text-[14px] lg:leading-[21px] font-normal text-[#FFFFFF]">
            At Zorft Technologies, we believe in the power of collaboration. Our
            strategic partnerships play a pivotal role in driving innovation and
            delivering exceptional solutions to our clients.
          </p>
        </div>
      </div>
      <div className="overflow-hidden w-full bg-[#3B3D3F] mt-10 lg:mt-32">
        <div
          className="mx-auto grid grid-cols-6 gap-[185px] lg:gap-[150.82px] w-[428.51px] lg:w-full
          h-[109.88px] lg:h-[156.01px] lg:py-[40px] my-1 -skew-y-2 bg-[white] overflow-hidden"
        >
          {partners?.map((partner) => (
            <div
              key={partner.id}
              className="w-[158.36px] lg:w-[233.15px] h-[51.63px] lg:h-[76.01px] ml-[-33px] pt-7 lg:pt-0"
            >
              <Image
                src={partner.logo || ""}
                alt={partner?.brand_name}
                width={233.15}
                height={76.01}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-auto lg:overflow-hidden w-[428px] lg:w-full">
        <div className="grid grid-cols-4 lg:grid-cols-2 gap-[400px] lg:gap-20 lg:justify-items-center my-8 lg:my-52 w-full">
          {partners?.slice(0, 4)?.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[428px] lg:w-[610px] h-[325px] lg:h-[px] pt- lg:pt-"
            >
              <Image
                src={partner.logo || ""}
                alt={partner?.brand_name}
                width={233.15}
                height={76.01}
              />
              <p className="text-[16px] leading-[25px] text-[#777680] lg:text-center mt-5">
                {partner?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
