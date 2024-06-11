import Image from "next/image";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="mx-auto flex flex-col items-start justify-start py-24 pb-16 my-8 w-full">
      <div>
        <div className="">
          <h4 className="text-[14px] leading-[16.1px] text-[#9C9AA1] bg-[#F2F2F2] p-2 rounded-lg w-[78px]">
            About Us
          </h4>
          <h2 className="text-[34px] leading-[45px] md:text-[72px] md:leading-[80px] font-bold text-[#004AAD] mt-2">
            Company Overview
          </h2>
        </div>

        <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[34px] text-[#5F5E6C] mt-14 md:w-[935px] h-[136px] font-normal">
          Zorft Technologies is a leading technology company specializing in a
          wide range of services, including brand design, graphics design, web
          and app development, data analytics, software development, and IT
          consulting. Since our inception in 20XX, we have been dedicated to
          delivering innovative solutions that empower businesses to thrive in
          the digital age.
        </p>
      </div>
      <div className="flex justify-center mt-40">
        <div className="bg-cover w-[446px] lg:w-[1256px] h-[231px] md:h-[595px]"></div>
      </div>
    </div>
  );
};

export default AboutUs;
