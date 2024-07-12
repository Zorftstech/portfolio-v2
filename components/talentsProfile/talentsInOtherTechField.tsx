"use client";
import React from "react";
import Image from "next/image";
import { Talents } from "../talents/data";

const TalentsInOtherTechFied: React.FC = () => {
  return (
    <div className="mx-auto mb-8 mt-20 md:mt-36 w-full ">
      <h2 className="text-[#004AAD] text-4xl md:text-5xl text-center font-bold mb-16 md:mb-24">
        Talents in Other Tech Field
      </h2>
      <div className="w-[100%] overflow-x-auto">
        <div className="flex flex-wrap md:flex-nowrap gap-4 mx-auto">
          {Talents.map((talent) => (
            <div
              key={talent.id}
              className="container md:min-w-[346px] max-w-[380px] h-[536px] bg-white rounded-[30px] p-4 border-[1px] border-[#E6EDF7]"
            >
              <div
                style={{ background: talent.bg }}
                className="relative bg-[#004AAD] rounded-[16px]"
              >
                <Image
                  src={talent.img}
                  alt=""
                  width={453}
                  height={411}
                  className="rounded-[16px]"
                />
                <div className="absolute left-4 bottom-3 bg-[#E6EDF7] w-fit px-[12px] py-[8px] rounded-[37px] text-[12px] text-[#00357B]">
                  <p>{talent.skill}</p>
                </div>
              </div>
              <div className="mt-5 ml-2">
                <p className="font-bold text-[20px]">{talent.name}</p>
                <p className="text-[16px] text-[#5B5B5B] my-4">
                  {talent.description}
                </p>
                <div className="bg-[#004AAD] px-[34px] py-[16px] w-fit rounded-[214px] text-[12px] leading-[16.1px] flex flex-row items-center cursor-pointer">
                  <Image
                    src="/Vector-4.svg"
                    alt="icon"
                    width={15.5}
                    height={4}
                  />
                  <a href="/" className="mx-2 lg:mx-3 text-white  text-[14px]">
                    Hire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalentsInOtherTechFied;
