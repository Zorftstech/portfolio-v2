"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
// import UserImage from "public/userImage.svg";

const WebSolution: React.FC = () => {
	return (
		<div className="w-[800px] h-[fit-content]">
			<h1 className="text-[40px] text-[#004AAD] font-bold mb-8">
				What Web Solution Do You Need?
			</h1>
			<p className="text-[20px] text-[#5F5E6C]">
				Web development services help create all types of web-based software and
				ensure great experience for web users. Different types of web solutions
				may seem similar from the outside but we approach them differently and
				know what factors are winning in each case.
			</p>
			<div className="flex flex-row mt-8">
				<div className="flex justify-between w-[32%] mr-2 p-4 bg-[#E6EDF7] rounded-[214px] text-[14px] cursor-pointer hover:">
					<Image
						src="/Vector-3.svg"
						alt="icon"
						className="mr-[.5rem]"
						width={15.5}
						height={4}
					/>
					<a href="/">Request Development Service</a>
				</div>
				<div className="flex justify-between w-[17%] p-4 bg-[transparent] rounded-[214px] text-[14px] cursor-pointer hover:">
					<Image
						src="/Vector-3.svg"
						alt="icon"
						className="mr-[.5rem]"
						width={15.5}
						height={4}
					/>
					<a href="/">Get a Quote</a>
				</div>
			</div>
		</div>
	);
};

export default WebSolution;
