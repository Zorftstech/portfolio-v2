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
      <div className="flex flex-col items-center p-6">
        <h2 className="">{bioData?.name}</h2>
        <h4 className="">{bioData?.title}</h4>
        <p className="">{bioData?.description}</p>
        <div className="mt-6 flex items-center gap-4">
          {bioData?.accounts.map((account) => (
            <Link key={account.id} className="text-[#004AAD] underline capitalize font-semibold" href={'/'}>
              <Image
                width={64}
                height={64}
                className="max-h-[500px] w-full object-cover rounded-2xl h-full"
                src={account.img_1 || account.img_2 || account.img_3 || ""}
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
