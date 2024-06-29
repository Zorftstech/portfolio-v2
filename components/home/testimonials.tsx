"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { Technologies } from "../data";
import TestimonialCard from "./testimonialCard";

const Testimonials: React.FC = () => {
	return (
		<div className="mx-auto lg:py-24 mb-8 mt-16 lg:mt-40 w-full">
			<div className="flex justify-start items-center">
				<h4 className="text-center bg-[#F2F2F2] p-2 rounded-lg text-[#9C9AA1] w-[130px]">
					Testimonials
				</h4>
			</div>

			{/* ============= Section description ============= */}
			<h3 className="text-[#3B3D3F] text-2xl lg:text-[64px] lg:leading-[82px] text-start font-bold mt-10">
            What they said about us<br /> from the people we shared<br /> experiences with.
			</h3>

            <TestimonialCard />
        </div>

    )
}

export default Testimonials