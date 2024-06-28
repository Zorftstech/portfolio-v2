"use client";
import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { careers, Careers, YourRole, YourSkills } from "../careers/data";
import { useRouter } from "next/navigation";
import { ICareerOpenings } from "@/lib/types";
import { fetchSingleCareerOpenings } from "@/lib/apis/request";
import Link from "next/link";
import Image from "next/image";
import { ICareerInnerPageProps } from ".";
import scrollToTop from "@/lib/helpers/scrollToTop";

const applyResetStyles = (element: HTMLElement) => {
  const tagsToReset = ["p", "span"];
  tagsToReset.forEach((tag) => {
    const elements = element.getElementsByTagName(tag);
    Array.from(elements).forEach((el) => {
      if (tag === "span") {
        el.removeAttribute("style");
      }
    });
  });
};

const Department: React.FC<ICareerInnerPageProps> = ({
  openingDetails,
  setCurrentPage,
}) => {
  const router = useRouter();
  const descriptionRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.innerHTML = openingDetails?.full_description || "";
      applyResetStyles(descriptionRef.current);
    }
  }, [openingDetails?.full_description]);

  useEffect(() => {
    if (roleRef.current) {
      roleRef.current.innerHTML = openingDetails?.role || "";
      applyResetStyles(roleRef.current);
    }
  }, [openingDetails?.role]);

  useEffect(() => {
    if (skillsRef.current) {
      skillsRef.current.innerHTML = openingDetails?.skills || "";
      applyResetStyles(skillsRef.current);
    }
  }, [openingDetails?.skills]);

  const handleApply = () => {
    scrollToTop();
    setCurrentPage(2);
  };

  return (
    <div className="mt-10 lg:mt-32">
      <div key={openingDetails?.id} className="">
        <div className="w-[372px] lg:w-[1200px] text-start">
          <div className={"flex items-center gap-3 mb-8"}>
            <FaArrowLeftLong
              className="text-[24px] text-center cursor-pointer text-gray-500 mr-4"
              onClick={() => {
                router.back();
              }}
            />
            <h2 className="text-[24px] lg:text-[48px] leading-[50px] lg:leading-[50px] text-[#004AAD] font-bold">
              {openingDetails?.job_title}
            </h2>
          </div>

          <div ref={descriptionRef} className="description_ref"></div>
        </div>

        <hr className="bg-[#E7E7E7] h-[1px] my-6 lg:my-24" />

        <div className="w-[372px] lg:w-[1200px] text-start">
          <h4 className="text-[24px] lg:text-[28px] leading-[50px] lg:leading-[50px] text-[#3B3B3B] font-bold mb-5">
            Your Role.
          </h4>
          <div className="description_ref pl-7" ref={roleRef}></div>
        </div>
        <hr className="bg-[#E7E7E7] h-[1px] my-10 lg:my-24" />

        <h4 className="text-[24px] lg:text-[28px] leading-[50px] lg:leading-[50px] text-[#3B3B3B] font-bold mb-5">
          Your Skills.
        </h4>
        <div className="description_ref pl-7" ref={skillsRef}></div>

        <button
          onClick={handleApply}
          className="lg:justify-self-end flex py-[16px] px-[24px] rounded-full bg-[#00439D] w-[157px] justify-between my-16"
        >
          <Image
            src={"/Vector-4.svg"}
            alt=""
            width={24}
            height={4}
            className="self-center"
          />
          <span className="text-[14px] leading-[16.1px] text-[#E7E7E7]">
            Apply Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default Department;
