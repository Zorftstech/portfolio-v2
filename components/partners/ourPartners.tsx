"use client";
import React from "react";
import Image from "next/image";
import { useAppContext } from "@/lib/context";
import { SideWrapper } from "../shared/Wrappers";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const OurPartners: React.FC = () => {
  const { store } = useAppContext();
  const { partners } = store;
  return (
    <div className="">
      <div className="bg-[url('/OurPartners.svg')] w-[100%] h-[224px] lg:h-[600px] mx-auto flex justify-center bg-cover bg-center lg:rounded-b-[100px] lg:-mt-16">
        <div className="w-[90vw] lg:w-[758px] h-[143px] lg:h-[156px] self-end text-center mb-10">
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
        {partners?.length !== 0 ? (
          <div
            className="mx-auto grid grid-cols-6 gap-[185px] md:gap-[200px] lg:gap-[250.82px] w-full
          h-[109.88px] lg:h-[156.01px] lg:py-[40px] my-1 -skew-y-2 bg-[white] overflow-hidden justify-items-center"
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
                  height={80}
                  className=" h-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        ) : (
          <LogoLoadingState />
        )}
      </div>
      <SideWrapper>
      <div className="overflow-x-scroll lg:overflow-hidden mt-16 md:mt-28 lg:my-52">
        <div className="grid grid-cols-4 lg:grid-cols-2 gap-96 md:gap-[800px] lg:gap-20 lg:justify-items-center">
          {partners?.slice(0, 4)?.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[353px] md:w-[768px] lg:w-[410px] xl:w-[605px]"
            >
              <div className="min-h-[80px]">
                <Image
                  src={partner.logo || ""}
                  alt={partner?.brand_name}
                  width={233.15}
                  height={50}
                  className="max-h-[50px] object-contain"
                />
              </div>
              <p className="text-[16px] leading-[25px] text-[#777680] lg:text-center mt-5">
                {partner?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </SideWrapper>
    </div>
  );
};

export default OurPartners;

const LogoLoadingState = () => {
  const filledArray = new Array(6).fill("");
  return (
    <SkeletonTheme baseColor="#336EBD" highlightColor="#8AACD9">
      <div
        className="grid grid-cols-6 gap-[185px] md:gap-[200px]
        lg:gap-[250.82px] w-full h-[109.88px] lg:h-[156.01px] lg:py-[40px]
        my-1 -skew-y-2 bg-[white] overflow-hidden justify-items-center"
      >
        {filledArray.map((_, itemIndex) => (
          <div
            className="w-[180px] md:w-[195px] lg:w-[220px] xl:w-[250px]"
            key={itemIndex}
          >
            <Skeleton className="h-[85px]" />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

const DetailsLoadingState = () => {
  const filledArray = new Array(2).fill("");
  return (
    <div className="grid md:grid-cols-2 gap-20">
      {filledArray.map((_, itemIndex) => (
        <div key={itemIndex} className="w-full">
          <div className="w-1/3 mx-auto mb-5" key={itemIndex}>
            <Skeleton className="h-[80px]" />
          </div>
          <Skeleton count={5} />
        </div>
      ))}
    </div>
  );
};
