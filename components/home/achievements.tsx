"use client";
import { extractYear } from "@/lib/helpers/extractYearfromDateString";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import type { Achievements } from "@/lib/admin/types";
import { getAchievements } from "@/lib/admin/firestore";

const AchievementsSection: React.FC = () => {
	const [data, setData] = useState<Achievements | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getAchievements().then((res) => {
			setData(res);
			setIsLoading(false);
		});
	}, []);

	return (
		<div className="flex items-center justify-center flex-col mt-28 lg:mt-56">
			<div className="grid md:grid-cols-2 gap-y-10 lg:flex-nowrap justify-center items-start w-[100%]">
				{/* =========== achievements texts =============== */}
				<div className="w-full lg:w-[428.15px]">
					<h2 className="text-[26.5px] lg:text-[64px] leading-[38px] lg:leading-[72px] font-semibold text-[#004AAD] mb-2">
						Here are <br /> some of our achievements
					</h2>
					<p className="text-base text-gray ">
						Below are some stats that shows our progress since we began offering
						our services
					</p>
				</div>

				{/* =================== achievements scores */}
				<div className="w-full grid grid-cols-2 gap-5 lg:gap-7 text-[#fff]">
					<div className="w-full h-[199.22px] lg:h-[340px] bg-[#336EBD] rounded-3xl flex justify-between items-start flex-col text-start px-2 sm:px-4 py-6">
						<div className="text-[#fff]">
                            <h2 className="text-4xl lg:text-7xl">
                                {isLoading ? "Year" : extractYear(data?.founded_date ?? "")}
                            </h2>
							<p>Founded</p>
						</div>

						<div>
							<p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[22px]">
								Below are some stats that shows our progress since we began
								offering our services
							</p>
						</div>
					</div>
					<div className="w-full h-[199.22px] lg:h-[340px] bg-[#5486C8] rounded-3xl flex justify-between items-start flex-col text-start px-2 sm:px-4 py-6">
						<div className="text-[#fff]">
                            <h2 className="text-4xl lg:text-7xl">
                                <CountUp end={isLoading ? 0 : (data?.no_of_projects ?? 0)} />+
                            </h2>
							<p>Projects</p>
						</div>

						<div>
							<p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[22px]">
								Below are some stats that shows our progress since we began
								offering our services
							</p>
						</div>
					</div>
					<div className="w-full h-[199.22px] lg:h-[340px] bg-[#00439D] rounded-3xl flex justify-between items-start flex-col text-start px-2 sm:px-4 py-6">
						<div className="text-[#fff]">
                            <h2 className="text-4xl lg:text-7xl">
                                <CountUp end={isLoading ? 0 : (data?.no_of_staffs ?? 0)} />+
                            </h2>
							<p>Staffs</p>
						</div>

						<div>
							<p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[22px]">
								Below are some stats that shows our progress since we began
								offering our services
							</p>
						</div>
					</div>
					<div className="w-full h-[199.22px] lg:h-[340px] bg-[#8AACD9] rounded-3xl flex justify-between items-start flex-col text-start px-2 sm:px-4 py-6">
						<div className="text-[#fff]">
                            <h2 className="text-4xl lg:text-7xl">
                                <CountUp end={isLoading ? 0 : (data?.no_of_clients ?? 0)} />+
                            </h2>
							<p>Happy clients</p>
						</div>

						<div>
							<p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[22px]">
								Below are some stats that shows our progress since we began
								offering our services
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AchievementsSection;
