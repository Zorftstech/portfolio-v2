"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBioData } from "../talents/data";

export interface BioDataProps {
  bioData: IBioData | undefined;
}

const BioData: React.FC<BioDataProps> = ({ bioData }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl">
      <div className="flex-shrink-0">
        <Image
          width={728}
          height={632}
          className="max-h-[500px] w-full object-contain rounded-2xl h-full"
          src={bioData?.profile_img || ""}
          alt="talent-img"
        />
      </div>
      <div className="flex flex-col items-center md:w-[67%] mt-10">
        <h2 className="text-[#3B3B3B] text-2xl sm:text-5xl font-bold">{bioData?.name}</h2>
        <h4 className="text-[#808080] text-base sm:text-3xl mt-5">{bioData?.title}</h4>
        <p className="text-[#808080] text-base sm:text-2xl text-center mt-7 md:mt-10">{bioData?.description}</p>
        <div className="mt-7 md:mt-12 flex items-center gap-7">
          {bioData?.accounts.map((account) => (
            <Link key={account.id} className="bg-[#E2F6FF] rounded-full p-3 md:p-5" href={'/'}>
              <Image
                width={23}
                height={22}
                className="object-contain md:w-10 md:h-10 xl:w-16 xl:h-16"
                src={account.img || ""}
                alt="link-img"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioData;
