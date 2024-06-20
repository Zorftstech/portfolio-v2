"use client";
import React from "react";
import Image from "next/image";

const Solution: React.FC = () => {
	return (
		<div className="mx-auto flex flex-col max-w-7xl items-start justify-center px-8 w-[428px] lg:w-[1280px] lg:mt-32 mt-7">
			<div className="w-[380px] lg:w-[798px] h-[402px] lg:h-[317px]">
				<div className="">
					<h1 className="text-[28px] lg:text-[40px] leading-[38px] text-[#004AAD] font-bold mb-8 ">
						What Web Solution Do You Need?
					</h1>
					<p className="text-[18px] lg:text-[20px] leading-[28px] text-[#5F5E6C] mb-8">
						Web development services help create all types of web-based software
						and ensure great experience for web users. Different types of web
						solutions may seem similar from the outside but we approach them
						differently and know what factors are winning in each case.
					</p>
				</div>
				<div className="flex justify-between w-[100%] lg:w-[50%]">
					<div className="bg-[#E6EDF7] px-3 py-1 rounded-[214px] text-[12px] leading-[16.1px] flex flex-row items-center cursor-pointer">
						<Image src="/Vector-3.svg" alt="icon" width={15.5} height={4} />
						<a href="/" className="mx-2 lg:mx-3">
							Request Development Service
						</a>
					</div>
					<div className="bg-[transparent] rounded-[214px] text-[12px] ml-2 p-[16px] flex flex-row items-center cursor-pointer">
						<Image src="/Vector-3.svg" alt="icon" width={15.5} height={4} />
						<a href="/" className="mx-3">
							Get a Date
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solution;
