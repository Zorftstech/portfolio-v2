import React from "react";
import Image from "next/image";
import Link from "next/link";
import { careers, Careers, EmploymentType } from "./data";

const BePartOfOurTeam: React.FC = () => {
    return(
    <div className="pt-10 lg:pt-32 pb-14 lg:pb-64">
        <div className="mx-auto w-[372px] lg:w-[928px] text-center mb-10 lg:mb-32">
            <h2 className="text-[28px] lg:text-[64px] leading-[38px] lg:leading-[80px] text-[#004AAD] font-bold">Be Part Of Our Team.</h2>
            <p className="text-[16px] lg:text-[20px] leading-[23px] lg:leading-[31px] text-[#5F5E6C]">Zorft Technologies is looking for passionate to join our team. We value communications, taking responbilities and keeping up to time.</p>
        </div>
        {careers.map((career: Careers, index) => (
            <div key={career.id} className="mt-14">
                <h4 className="text-[24px] lg:text-[32px] leading-[50px] lg:leading-[50px] text-[#004AAD] font-bold">{career.department}</h4>
                <p className="text-[16px] lg:text-[20] leading-[25px] lg:leading-[31px] text-[#5F5E6C] mt-8">{career.summary}</p>
                <div className="grid lg:grid-cols-3 mt-7 gap-7 lg:gap-0">
                    <div className="justify-self-start flex lg:hidden lg:gap-10 justify-between lg:justify-start lg:col-span-2 w-full">
                        {career.employment_type.slice(0, 3).map((employment: EmploymentType) => (
                            <div key={employment.id}>
                                <Link href={`/careers/career?department=${career.department}`} className="text-[14px] leading-[16.1px] text-[#3B3B3B] py-[16px] px-[24px] border-[1px] rounded-full">
                                    {employment.type}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="justify-self-start hidden lg:flex lg:gap-10 justify-between lg:justify-start lg:col-span-2 w-full">
                        {career.employment_type.map((employment: EmploymentType) => (
                            <div key={employment.id}>
                                <Link href={`/careers/career?department=${career.department}`} className="text-[14px] leading-[16.1px] text-[#3B3B3B] py-[16px] px-[24px] border-[1px] rounded-full">
                                    {employment.type}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <button className="lg:justify-self-end flex py-[16px] px-[24px] rounded-full bg-[#00439D] w-[157px] justify-between">
                        <Image src={'/Vector-4.svg'} alt="" width={24} height={4} className="self-center" />
                        <span className="text-[14px] leading-[16.1px] text-[#E7E7E7]">Contact Us</span>
                    </button>
                </div>
                {index < careers.length - 1 && <hr className="bg-[#E7E7E7] h-[1px] mt-14" />}
            </div>
        ))}
    </div>
    )
}

export default BePartOfOurTeam;