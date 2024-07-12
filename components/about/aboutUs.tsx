import Image from "next/image";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start lg:py-24 pb-16 my-8 w-full">
      <div className="w-full">
        <div className="">
          <h4 className="text-[14px] leading-[16.1px] text-[#9C9AA1] bg-[#F2F2F2] p-2 rounded-lg w-[78px]">
            About Us
          </h4>
          <h2
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            sm:leading-[55px] md:leading-[70px] lg:leading-[90px]
            font-bold text-[#004AAD] mt-5 lg:mt-2 tracking-tight"
          >
            Company Overview
          </h2>
        </div>

        <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[34px] text-[#5F5E6C] mt-10 lg:mt-14 w-full lg:w-[935px] font-normal lg:tracking-[-0.02em]">
          Zorft Technologies is a leading technology company specializing in a
          wide range of services, including brand design, graphics design, web
          and app development, data analytics, software development, and IT
          consulting. Since our inception in 2018, we have been dedicated to
          delivering innovative solutions that empower businesses to thrive in
          the digital age.
        </p>
      </div>
      <div className="flex justify-center mt-28 w-full">
        <div className="bg-[url('/image-19.svg')] bg-no-repeat bg-cover w-full h-[231px] md:h-[395px]  lg:h-[495px] rounded-lg lg:rounded-3xl"></div>
      </div>
    </div>
  );
};

export default AboutUs;
