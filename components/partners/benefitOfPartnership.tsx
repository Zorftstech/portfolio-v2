import React from "react";
import Image from "next/image";
import { partners } from "../data";
import Link from "next/link";

const BenefitOfParnership: React.FC = () => {
  return (
    <div className="mx-auto mt-16 md:mt-40 lg::mt-60 mb-20 w-full ">
      {partners.slice(0, 1).map((partner) => (
        <div
          key={partner.id}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
        >
          <div className="w-full">
            <h2 className="text-2xl md:text-4xl lg:text-5xl leading-[38px] lg:leading-[52px] font-bold text-[#004AAD]">
              Benefits of Partnership
            </h2>
            <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[29px] text-[#5F5E6C] mt-9">
              {partner.benefit}
            </p>
            <div className="flex gap-3 justify-center align-center bg-[#E6EDF7] border-[#B0C7E6] w-fit lg:w-[277px] h-[48px] lg:h-[63px] lg:w- mt-10 rounded-full px-5 md:px-8">
              <Image src={"Vector-3.svg"} alt="icon" width={15.5} height={4} />
              <Link
                href="/"
                className="text-[14px] leading-[16.1px] text-[#424247] cursor-pointer no-underline self-center"
              >
                Want to become a partner?
              </Link>
            </div>
          </div>
          <Image
            src={"partnership.svg"}
            alt={partner.name}
            layout=""
            width={380}
            height={267.58}
            className="rounded w-full object-fit"
          />
        </div>
      ))}
    </div>
  );
};

export default BenefitOfParnership;
