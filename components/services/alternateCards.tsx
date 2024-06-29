"use client";
import React from "react";
import Image from "next/image";
import { IServiceDetailProps } from "./service";

const AlternateCard: React.FC<IServiceDetailProps> = ({ serviceDetails }) => {
  return (
    <div className="mx-auto flex gap-14 max-w-7xl items-center justify-center flex-col mt-8 md:mt-16 lg:mt-28 px-8 w-full">
      {serviceDetails?.content?.map((service, index) => (
        <div
          key={service.id}
          className="flex flex-wrap md:flex-nowrap justify-between lg:my-28 w-full"
          style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
        >
          <div
            className={`w-full lg:w-[520px] ${
              index % 2 === 0 ? "md:mr-12" : "md:ml-12"
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
          <div className="w-full lg:w-auto mt-10 md:mt-0">
            <Image
              src={service?.image}
              alt={service.title}
              // layout="responsive"
              width={620}
              height={453}
              className="lg:w-[620px] lg:h-[453px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternateCard;
