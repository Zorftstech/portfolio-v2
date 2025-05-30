"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { Technologies } from "../data";

const TechnologiesWeUse: React.FC = () => {
	return (
		<div className="mx-auto lg:py-24 mt-12 lg:mt-40 w-full hidden lg:block">
			<div className="flex justify-center items-center">
				<h4 className="text-center bg-[#F2F2F2] p-2 rounded-lg text-[#9C9AA1] w-[130px]">
					Technologies
				</h4>
			</div>

			{/* ============= Section description ============= */}
			<h3 className="text-[#004AAD] text-4xl lg:text-[64px] lg:leading-[52px] text-center font-bold mt-10">
				Technologies we use
			</h3>
			<p className="text-[#5F5E6C] text-lg lg:text-[20px] lg:leading-[31px] text-center font-normal my-10">
				At Zorft technologies, we make use of modern and efficient technology
				for our projects
			</p> 

			{/* ============= Marquee for Technologies ============= */}
			<Marquee>
				{Technologies.map((tech, index) => (
					<div
						key={tech.id}
						style={{
							marginLeft: "-70px",
							marginTop: index % 2 === 0 ? "220px" : "-80px",
						}}>
						<Image
							src={tech.src}
							width={177.62}
							height={80}
							alt={tech.name}
							objectFit="contain"
							className="lg:w-[180] lg:h-[40]"
						/>
					</div>
				))}
			</Marquee>
		</div>
	);
};

export default TechnologiesWeUse;
