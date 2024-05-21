"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
// import UserImage from "public/userImage.svg";

const TestimonialCard: React.FC = () => {
	return (
		<div className="grid grid-cols-3 gap-[.5rem]">
			<div className="h-[fit-content] w-[380px] p-[26px] bg-[#F8F8F8] rounded-[26px]">
				<div className="flex flex-column items-center mb-[1rem]">
					<Image src="/userImage.svg" alt="image" width={60} height={60} />
					<h1 className="text-[26px] text-[#5F5E6C] font-bold  ml-[1rem]">
						James Bond
					</h1>
				</div>
				<p className="text-[20px] text-[#5F5E6C]">
					lorem ipsum dolor sit amet consectetur. Odio rhoncus consequat nec.
					Lorem ipsum dolor sit amet consectetur. Odio rhonc
				</p>
			</div>

			<div className="h-[fit-content] w-[380px] p-[26px] bg-[#F8F8F8] rounded-[26px]">
				<div className="flex flex-column items-center mb-[1rem]">
					<Image src="/userImage.svg" alt="image" width={60} height={60} />
					<h1 className="text-[26px] text-[#5F5E6C] font-bold  ml-[1rem]">
						James Bond
					</h1>
				</div>
				<p className="text-[20px] text-[#5F5E6C]">
					lorem ipsum dolor sit amet consectetur. Odio rhoncus consequat nec.
					Lorem ipsum dolor sit amet consectetur. Odio rhonc
				</p>
			</div>

			<div className="h-[fit-content] w-[380px] p-[26px] bg-[#F8F8F8] rounded-[26px]">
				<div className="flex flex-column items-center mb-[1rem]">
					<Image src="/userImage.svg" alt="image" width={60} height={60} />
					<h1 className="text-[26px] text-[#5F5E6C] font-bold  ml-[1rem]">
						James Bond
					</h1>
				</div>
				<p className="text-[20px] text-[#5F5E6C]">
					lorem ipsum dolor sit amet consectetur. Odio rhoncus consequat nec.
					Lorem ipsum dolor sit amet consectetur. Odio rhonc
				</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
