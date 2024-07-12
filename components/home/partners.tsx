"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { useAppContext } from "@/lib/context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PartnersSection: React.FC = () => {
  const { store } = useAppContext();
  const { partners } = store;
  return (
    <div className="mt-28 lg:mt-44">
      <div className="w-[100%] lg:w-[700px] mb-12">
        <h3
          className="text-[#3B3D3F] text-[28px] sm:text-[40px] md:text-[54px] lg:text-[64px] md:max-w-[600px] tracking-tighter
          lg:max-w-[initial] leading-[32px] sm:leading-[40px] md:leading-[60px] lg:leading-[74px] font-bold text-start"
        >
          At Zorft Technologies, we&apos;re more than just a tech company
        </h3>
        <p className="md:text-lg lg:text-2xl lg:leading-[30px] text-start text-[#8f8f92] max-w-[550px] tracking-tight mt-5 lg:mt-10">
          We&#x201A;re your strategic partner in unlocking the full potential of
          your digital presence.
        </p>
      </div>
      {partners?.length === 0 ? (
        <Skeleton className="h-[120px] w-full" />
      ) : (
        <Marquee>
          {partners?.map((partner) => (
            <div key={partner.id} className="px-4">
              <Image
                src={partner.logo || ""}
                width={150}
                height={30}
                alt={partner?.brand_name}
                className="max-h-[80px] min-h-[80px] object-contain "
              />
            </div>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default PartnersSection;
