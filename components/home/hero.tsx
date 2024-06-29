import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlinePhoneCallback } from "react-icons/md";

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-12 lg:my-24">
      <h2 className="text-3xl lg:text-7xl leading-[45px] lg:leading-[98px] font-semibold text-center tracking-tighter text-[#3B3D3F]">
        Unlocking possibilities
        <br /> through <span className="text-[#004AAD]">technology</span>
      </h2>
      <p className="text-lg lg:text-xl text-[#888793] tracking-tight leading-[33px] text-center my-5">
        Empowering Businesses and individuals with cutting edge software
        solutions
      </p>
      <div className="flex items-center justify-center gap-4 mx-auto mt-2 lg:mt-7">
        <Link
          href={"/portfolio"}
          className="py-4 lg:py-5 px-6 border-[#bebebe] border rounded-full text-xs lg:text-sm text-[#3B3D3F] flex"
        >
          View our portfolio
        </Link>
        <Link
          href={"/contact"}
          className="py-4  lg:py-5 px-8 text-white bg-[#004AAD] rounded-full flex items-center flex-row gap-2 text-xs lg:text-sm"
        >
          <MdOutlinePhoneCallback className="text-[18px]" /> Let&apos;s Talk
        </Link>
      </div>
      <div className="mt-12 lg:mt-28">
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
