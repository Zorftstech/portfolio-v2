"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { servicesData, Service } from "../data";
import { IServiceDetailProps } from "./service";

const AlternateCard: React.FC<IServiceDetailProps> = ({ serviceDetails }) => {
  return (
    <div className="mx-auto flex gap-14 max-w-7xl items-center justify-center flex-col lg:mt-28 mt-8 px-8">
      {serviceDetails?.content?.map((service, index) => (
        <div
          key={service.id}
          className="flex flex-wrap lg:flex-nonwrap justify-between lg:my-28"
          style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
        >
          <div
            className={`w-[100%] lg:w-[520px] ${
              index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
            }`}
          >
            <h3 className="text-[28px] lg:text-[40px] leading-[38px] lg:leading-[80px] text-[#3B3D3F] font-bold">
              {service.title}
            </h3>
            <p className="text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-[#5F5E6C] mt-5">
              {service.description}
            </p>
            <button className="border-[3px] border-[#E6EDF7] p-[16px] rounded-[214px] flex flex-row items-center cursor-pointer mt-3">
              <Image src="/vector-3.svg" alt="icon" width={15.5} height={4} />
              <a
                href="/"
                className="text-[14px] leading-[16.1px] text-[#424247] ml-2"
              >
                Request Development Service
              </a>
            </button>
          </div>
          <Image
            src={service?.image}
            alt={service.title}
            width={380}
            height={296.4}
            className="lg:w-[620px] lg:h-[453px] mt-10 lg:mt-0"
          />
        </div>
      ))}
    </div>
  );
};

export default AlternateCard;
