"use client";
import React from "react";
import { testimonialCards, TestimonialCards } from "../data";
import Image from "next/image";

const TestimonialCard: React.FC = () => {
	return (
		<div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-4 py-24 my-8 lg:px-8">
			{testimonialCards.map((testimonie: TestimonialCards) => (
			<div key={testimonie.id} className="bg-[#F8F8F8] rounded-[26px] w-[385px] lg:w-[400px] h-[fit-content] p-4">
				<div className="flex flex-row items-center">
					<Image src={testimonie.img} alt="User Image" width={60} height={60} />
					<h1 className="text-[26px] text-[#5F5E6C] font-bold ml-4">
						{testimonie.name}
					</h1>
				</div>
				<p className="text-[20px] text-[#5F5E6C]">
					{testimonie.testimonie}
				</p>
			</div>
			))}
		</div>
	);
};

export default TestimonialCard;
