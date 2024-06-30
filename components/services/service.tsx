"use client";
import React from "react";
import { IService } from "@/lib/types";

export interface IServiceDetailProps {
  serviceDetails: IService | undefined;
}

const ServiceDetail: React.FC<IServiceDetailProps> = ({ serviceDetails }) => {
  console.log(serviceDetails);
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <div className="bg-[url('/serviceDetail-a.png')] w-full h-[441px] lg:h-[500px] mx-auto flex justify-center bg-cover bg-center rounded-b-[40px] lg:rounded-b-[70px]">
        <div
          key={serviceDetails?.id}
          className="w-[390px] md:w-[710px] lg:w-[928px] h-[] lg:h-[156px] self-center text-center px-3"
        >
          <span className="bg-[#E6EDF7] px-[30px] py-[12px] mb-8 xl:mb-2 rounded-[214px] text-[12px] text-[#5F5E6C]">
            Services {'>' + ' ' + serviceDetails?.name} 
					</span>
          <h2 className="text-2xl sm:text-[32px] lg:text-[64px] leading-[45px] lg:leading-[80px] font-bold text-[#004AAD] mt-12">
            {serviceDetails?.main_title}
          </h2>
          <p className="text-sm sm:text-[18px] lg:text-[20px] leading-[28px] lg:leading-[31px] font-normal text-[#5F5E6C] mt-5">
            {serviceDetails?.main_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
