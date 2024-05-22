"use client";
import React from "react";
import { portfolioProjects } from "../data";
import Image from "next/image";

const TestimonialCard: React.FC = () => {
	return (
		<div className="bg-[#F8F8F8] rounded-[26px] w-[400px] h-[fit-content] p-4">
			<div>
				<div className="flex flex-row items-center">
					<Image src="/userImage.svg" alt="User Image" width={60} height={60} />
					<h1 className="text-[26px] text-[#5F5E6C] font-bold ml-4">
						James Bond
					</h1>
				</div>
				<p className="text-[20px] text-[#5F5E6C]">
					Lorem ipsum dolor sit amet consectetur. Odio rhoncus consequat nec.
					Lorem ipsum dolor sit amet consectetur. Odio rhoncus consequat nec.
					Lorem ipsum
				</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
