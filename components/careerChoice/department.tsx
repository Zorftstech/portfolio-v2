"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { careers, Careers, YourRole, YourSkills } from "../careers/data";
import { useRouter } from 'next/navigation'
// import router from "next/router";

const Department: React.FC = () => {
  const searchParams = useSearchParams();
  const department = searchParams.get("department");
  const [career, setCareer] = useState<Careers | undefined>(careers[0]);
  const router = useRouter()

  useEffect(() => {
    console.log(department);
    if (department && typeof department === "string") {
      const currentCareer = careers.find(
        (career) => career?.department === department
      );
      if (currentCareer) {
        // console.log(currentCareer)
        setCareer(currentCareer);
      }
    }
  }, [department]);

  return (
    <div className="mt-10 lg:mt-32">
      <div key={career?.id} className="">
        <div className="w-[372px] lg:w-[1200px] text-start">
          <div className={"flex items-center gap-3 mb-8"}>
            <FaArrowLeftLong
                className="text-[24px] text-center"
                onClick={() => {
                  router.back()
                }}
            />
            <h2 className="text-[24px] lg:text-[48px] leading-[50px] lg:leading-[50px] text-[#004AAD] font-bold">
              {career?.department}
            </h2>
          </div>

          <p className="text-[16px] lg:text-[20px] leading-[27px] lg:leading-[31px] text-[#5F5E6C]">
            {career?.description}
          </p>
        </div>

        <hr className="bg-[#E7E7E7] h-[1px] my-10 lg:my-24" />

        <div className="w-[372px] lg:w-[1200px] text-start">
          <h4 className="text-[24px] lg:text-[28px] leading-[50px] lg:leading-[50px] text-[#3B3B3B] font-bold mb-5">
            Your Role.
          </h4>

          <ol className="list-decimal pl-7">
            {career?.your_role.map((role: YourRole) => (
              <li
                key={role.id}
                className="text-[16px] lg:text-[20px] leading-[27px] lg:leading-[31px] text-[#5F5E6C]"
              >
                {role.duty}
              </li>
            ))}
          </ol>
        </div>

        {/* <button className="lg:justify-self-end flex py-[16px] px-[24px] rounded-full bg-[#00439D] w-[157px] justify-between my-16">
                    <Image src={'/Vector-4.svg'} alt="" width={24} height={4} className="self-center" />
                    <span className="text-[14px] leading-[16.1px] text-[#E7E7E7]">Apply Now</span>
                </button> */}
      </div>
    </div>
  );
};

export default Department;
