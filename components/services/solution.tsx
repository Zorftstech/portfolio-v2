"use client";
import React from "react";
import Image from "next/image";

const CyberSolution: React.FC = () => {
	return (
		<div className="w-[798px] h-[317px] ml-[-395px] mt-32">
			<div className="">
				<h1 className="text-[40px] text-[#004AAD] font-bold mb-8 ">
					What Web Solution Do You Need?
				</h1>
				<p className="text-[20px] text-[#5F5E6C] mb-8">
					Web development services help create all types of web-based software
					and ensure great experience for web users. Different types of web
					solutions may seem similar from the outside but we approach them
					differently and know what factors are winning in each case.
				</p>
			</div>
			<div className="flex justify-between w-[53%]">
				<div className="bg-[#E6EDF7] p-[16px] rounded-[214px] text-[14px] flex flex-row items-center cursor-pointer">
					<Image src="/vector-3.svg" alt="icon" width={15.5} height={4} />
					<a href="/" className="mx-3">
						Request Development Service
					</a>
				</div>
				<div className="bg-[transparent] rounded-[214px] text-[14px] ml-2 p-[16px] flex flex-row items-center cursor-pointer">
					<Image src="/vector-3.svg" alt="icon" width={15.5} height={4} />
					<a href="/" className="mx-3">
						Get a Date
					</a>
				</div>
			</div>
		</div>
	);
};

export default CyberSolution;
