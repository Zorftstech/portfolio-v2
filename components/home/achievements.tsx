"use client";
import { fetchDataStatistics } from "@/lib/apis/request";
import { extractYear } from "@/lib/helpers/extractYearfromDateString";
import { IDataStatistics } from "@/lib/types";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const AchievementsSection: React.FC = () => {
  const [data, setData] = useState<IDataStatistics[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDataStatistics().then((res) => {
      setData(res?.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="flex items-center justify-center flex-col py-24">
      <div className="flex justify-center items-start flex-row w-[100%]">
        {/* =========== achievements texts =============== */}
        <div className="w-[50%]">
          <h2 className="text-[64px] leading-[72px] font-semibold text-[#004AAD] mb-2">
            Here are some of our achievements
          </h2>
          <p className="text-base text-gray ">
            Below are some stats that shows our progress since we began offering
            our services
          </p>
        </div>

        {/* =================== achievements scores */}
        <div className="w-[50%] grid grid-cols-2 gap-4 text-[#fff]">
          <div className="w-[303px] h-[340px] bg-[#336EBD] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6">
            <div className="text-[#fff]">
              <h2 className="text-[64px]">
                {isLoading ? "Year" : extractYear(data[0].founded_date)}
              </h2>
              <p>Founded</p>
            </div>

            <div>
              <p>
                Below are some stats that shows our progress since we began
                offering our services
              </p>
            </div>
          </div>
          <div className="w-[303px] h-[340px] bg-[#5486C8] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6">
            <div className="text-[#fff]">
              <h2 className="text-[64px]">
                <CountUp end={isLoading ? 0 : data[0].no_of_projects} />+
              </h2>
              <p>Projects</p>
            </div>

            <div>
              <p>
                Below are some stats that shows our progress since we began
                offering our services
              </p>
            </div>
          </div>
          <div className="w-[303px] h-[340px] bg-[#00439D] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6">
            <div className="text-[#fff]">
              <h2 className="text-[64px]">
                <CountUp end={isLoading ? 0 : data[0].no_of_staffs} />+
              </h2>
              <p>Staffs</p>
            </div>

            <div>
              <p>
                Below are some stats that shows our progress since we began
                offering our services
              </p>
            </div>
          </div>
          <div className="w-[303px] h-[340px] bg-[#8AACD9] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6">
            <div className="text-[#fff]">
              <h2 className="text-[64px]">
                <CountUp end={isLoading ? 0 : data[0].no_of_clients} />+
              </h2>
              <p>Happy clients</p>
            </div>

            <div>
              <p>
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
