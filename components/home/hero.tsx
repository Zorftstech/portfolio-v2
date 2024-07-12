import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlinePhoneCallback } from "react-icons/md";

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-6 md:mt-12">
      <h2
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        sm:leading-[55px] md:leading-[70px] lg:leading-[90px]
        font-bold text-center tracking-tight text-[#3B3D3F]"
      >
        Unlocking possibilities <br /> through{" "}
        <span className="text-[#004AAD]">technology</span>
      </h2>
      <p
        className="md:text-lg lg:text-xl text-[#888793]
        tracking-tight leading-[24px] md:leading-[33px] text-center my-4"
      >
        Empowering Businesses and individuals with cutting edge software
        solutions
      </p>
      <div className="flex items-center justify-center gap-4 mx-auto mt-2 lg:mt-7">
        <Link
          href={"/portfolio"}
          className="py-3 lg:py-5 px-5 md:px-6 border-[#bebebe] border rounded-full text-xs md:text-sm text-[#3B3D3F] flex"
        >
          View our portfolio
        </Link>
        <Link
          href={"/contact"}
          className="py-3 lg:py-5 px-6 md:px-8 text-white bg-[#004AAD] rounded-full flex items-center flex-row gap-2 text-xs lg:text-sm"
        >
          <MdOutlinePhoneCallback className="text-[18px]" /> Let&apos;s Talk
        </Link>
      </div>
      <div className="mt-12 lg:mt-28">
        <Image
          src={"/hero-dashboard.jpg"}
          alt="Zorfts Technologies Ltd Projects"
          width={1200}
          height={800}
          className="w-full grayscale hover:grayscale-0 transition-all duration-400 ease-in-out"
        />
      </div>
    </div>
  );
};

export default HeroSection;
