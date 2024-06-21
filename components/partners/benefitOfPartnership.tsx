import React from "react";
import Image from "next/image";
import { partners } from "../data";
import Link from "next/link";

const BenefitOfParnership: React.FC = () => {
  return (
    <div className="mx-auto mt-8 mb-20 lg:my-40 w-full">
      {partners.slice(0, 1).map((partner) => (
        <div
          key={partner.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-[97px] gap-y-[50px] lg:gap-y-[97px]"
        >
          <div className="lg:mt-16 w-[380px] lg:w-[610px]">
            <h2 className="text-[28px] lg:text-[40px] leading-[38px] lg:leading-[52px] font-bold text-[#004AAD] mb-[40px]">
              Benefits of Partnership
            </h2>
            <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[29px] text-[#5F5E6C]">
              {partner.benefit}
            </p>
            <div className="flex justify-around align-center bg-[#E6EDF7] border-[#B0C7E6] w-[253px] lg:w-[277px] h-[48px] lg:h-[63px] lg:w- mt-10 rounded-full px-3 lg:px-8">
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
            width={380}
            height={267.58}
            className="rounded lg:w-full object-fit"
          />
        </div>
      ))}
    </div>
  );
};

export default BenefitOfParnership;
