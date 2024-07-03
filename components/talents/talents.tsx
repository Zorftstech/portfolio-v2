import React from "react";
import Image from "next/image";
import TalentsCard from "@/components/talents/talentsCard";
import { SideWrapper } from "../shared/Wrappers";

const Talents: React.FC = () => {
  return (
    <>
      <SideWrapper>
        <div className="flex-row xl:flex xl:justify-center gap-14 mt-20">
          <div className="flex flex-col items-center xl:items-start">
            <p className="bg-[#E6EDF7] px-[30px] py-[12px] mb-8 xl:mb-2 w-fit rounded-[214px] text-[12px]">
              Talents
            </p>
            <h1
              className="text-[#004AAD] text-center xl:text-left text-[48px]
		  	xl:text-[64px] font-bold leading-[47px] xl:leading-[80px] xl:max-w-[600px]"
            >
              Hire Our Amazing Talents
            </h1>
            <p className="text-[#5F5E6C] text-center xl:text-left text-[16px] xl:text-[20px] my-10 xl:my-6">
              Are you looking for amazing talents to work with? <br /> we’ve got
              you covered.
            </p>
            <div className="bg-[#004AAD] px-[24px] py-[18px] mb-14 xl:mb-0 w-fit rounded-[214px] text-[12px] leading-[16.1px] flex flex-row items-center cursor-pointer">
              <Image src="/Vector-4.svg" alt="icon" width={15.5} height={4} />
              <a href="/" className="mx-2 lg:mx-3 text-white  text-[14px]">
                Schedule a call
              </a>
            </div>
          </div>

          <div className="flex justify-center xl:justify-start my-10 xl:my-0">
            <Image src={"/Frame.png"} alt="" width={622} height={501} />
          </div>
        </div>
      </SideWrapper>
      <div className="pt-24 my-8 lg:px-8 bg-[#F6FAFF]">
        <SideWrapper>
          <div className="flex flex-col items-center mb-14">
            <h1 className="text-[#004AAD] text-[40px] xl:text-[64px] font-bold ">
              Our Talents
            </h1>
            <p className="text-[16px] xl:text-[20px] px-8 xl:px-0 text-center text-[#5F5E6C]">
              Are you looking for amazing talents to work with? we’ve got you
              covered.
            </p>
          </div>
          <div className="flex justify-center ">
            <TalentsCard />
          </div>
          <div className="py-[4rem]">
            <div className="mx-auto bg-[#E6EDF7] px-[34px] py-[16px] w-fit rounded-[214px] text-[12px] leading-[16.1px] flex flex-row items-center cursor-pointer">
              <Image
                src="/Vector-3-blue.svg"
                alt="icon"
                width={15.5}
                height={4}
              />
              <a href="/" className="mx-2 lg:mx-3 text-[#004AAD]  text-[14px]">
                See More
              </a>
            </div>
          </div>
        </SideWrapper>
      </div>
    </>
  );
};

export default Talents;
