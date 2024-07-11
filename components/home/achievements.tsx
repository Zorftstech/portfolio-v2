"use client";
import { fetchDataStatistics } from "@/lib/apis/request";
import { extractYear } from "@/lib/helpers/extractYearfromDateString";
import { IDataStatistics } from "@/lib/types";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Spinner from "../loadingStates/spinner";

const AchievementsSection: React.FC = () => {
  const [hasIntersected, setHasIntersected] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<IDataStatistics[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDataStatistics().then((res) => {
      if (res?.success) {
        setData(res?.data);
        if (data.length !== 0) {
          setIsLoading(false);
        }
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
  }, []);

  return (
    <div className="flex items-center justify-center flex-col mt-28 lg:mt-56">
      <div className="flex flex-col lg:flex-row gap-10 justify-center w-[100%]">
        {/* =========== achievements texts =============== */}
        <div className="w-full lg:w-[428.15px] xl:w-1/2">
          <h2
            className="text-[26.5px] sm:text-[40px] md:text-[50px] lg:text-[64px] leading-[38px] md:leading-[50px]
            lg:leading-[72px] font-bold text-[#004AAD] mb-2 tracking-tight xl:w-[400px]"
          >
            Here are some of our achievements
          </h2>
          <p className="text-base text-[#656565] tracking-tight">
            Below are some stats that shows our progress since we began offering
            our services
          </p>
        </div>

        {/* =================== achievements scores */}
        <div
          ref={counterRef}
          className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-7 text-[#fff]"
        >
          <div className="w-full h-[240px] lg:h-[340px] bg-[#336EBD] rounded-3xl flex justify-between items-start flex-col text-start px-6 py-8">
            <div className="text-[#fff]">
              <h2 className="text-4xl lg:text-7xl">
                {isLoading ? (
                  <Spinner />
                ) : (
                  hasIntersected && extractYear(data && data[0]?.founded_date)
                )}
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
          <div className="w-full h-[240px] lg:h-[340px] bg-[#5486C8] rounded-3xl flex justify-between items-start flex-col text-start px-6 py-8">
            <div className="text-[#fff]">
              <h2 className="text-4xl lg:text-7xl">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <>
                    {hasIntersected && (
                      <CountUp end={data && data[0]?.no_of_projects} />
                    )}
                    +
                  </>
                )}
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
          <div className="w-full h-[240px] lg:h-[340px] bg-[#00439D] rounded-3xl flex justify-between items-start flex-col text-start px-6 py-8">
            <div className="text-[#fff]">
              <h2 className="text-4xl lg:text-7xl">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <>
                    {hasIntersected && (
                      <CountUp end={data && data[0]?.no_of_staffs} />
                    )}
                    +
                  </>
                )}
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
          <div className="w-full h-[240px] lg:h-[340px] bg-[#8AACD9] rounded-3xl flex justify-between items-start flex-col text-start px-6 py-8">
            <div className="text-[#fff]">
              <h2 className="text-4xl lg:text-7xl">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <>
                    {hasIntersected && (
                      <CountUp end={data && data[0]?.no_of_clients} />
                    )}
                    +
                  </>
                )}
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
