import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlinePhoneCallback } from "react-icons/md";

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col py-12 my-8">
      <h2 className="text-4xl lg:text-[82px] leading-[45px] lg:leading-[98px] font-semibold text-center tracking-tighter text-[#3B3D3F]">
        Unlocking possibilities
        <br /> through <span className="text-[#004AAD]">technology</span>
      </h2>
      <p className="text-[20px] text-[#888793] tracking-tight leading-[33px] text-center my-5">
        Empowering Businesses and individuals with cutting edge software
        solutions
      </p>
      <div className="flex items-center justify-center gap-4 mx-auto p-4 mb-8">
        <Link
          href={"/portfolio"}
          className="py-4 px-6 border-[#bebebe] border rounded-full text-sm text-[#3B3D3F] flex"
        >
          View our portfolio
        </Link>
        <Link
          href={"/contact"}
          className="py-[18px] px-8 text-white bg-[#004AAD] rounded-full flex items-center flex-row gap-2 text-sm"
        >
          <MdOutlinePhoneCallback className="text-[18px]" /> Let&apos;s Talk
        </Link>
      </div>
      <div className="">
        <Image
          src={"/hero-img.svg"}
          alt="Zorfts Technologies Ltd Projects"
          width={1200}
          height={800}
        />
      </div>
    </div>
  );
};

export default HeroSection;
