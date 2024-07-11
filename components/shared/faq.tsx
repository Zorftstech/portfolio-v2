"use client";
import React, { useEffect, useState } from "react";
import { IFaqData } from "@/lib/types";
import { fetchFaq } from "@/lib/apis/request";
import Skeleton from "react-loading-skeleton";

const FaqSection: React.FC = () => {
  const [data, setData] = useState<IFaqData[]>([]);

  useEffect(() => {
    fetchFaq().then((res) => {
      if (res?.success) {
        setData(res?.data.results);
      }
    });
  }, []);

  return (
    <div className="my-24 mb-8">
      <div className="flex justify-center items-center">
        <h4 className="text-center bg-[#F2F2F2] p-2 rounded text-[#9C9AA1] w-[49px] lg:w-[60px]">
          FAQ
        </h4>
      </div>
      <h2 className="text-[#004AAD] text-2xl md:text-4xl lg:text-6xl text-center leading-[38px] lg:leading-[74px] font-bold mt-5">
        Any Questions?
      </h2>
      <p className="text-center font-normal leading-7 mt-3 tracking-tight text-[#5F5E6C]">
        At Zorft technologies, we make use of modern and efficient technology
        for our projects.
      </p>

      {/* ================== faq accordion ==================== */}
      <div className="mx-auto max-w-7xl mt-10">
        <hr className="bg-[#E7E7E7] h-[1px] mt-12 mb-3" />

        {data.length !== 0 ? (
          data?.map((faq) => (
            <div
              className="divide-y divide-solid divide-[#E7E7E7] w-[100%]"
              key={faq?.id}
            >
              <details className="group" open={faq.id === 1}>
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-bold lg:text-2xl text-secondary-900 group-open:text-primary-500">
                  {faq?.question}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 group-open:hidden"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden h-5 w-5 group-open:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="pb-4 text-secondary-400 leading-7 text-[16px] tracking-wide">
                  {faq?.answer}
                </div>
              </details>
              <hr className="bg-[#E7E7E7] h-[0px] my-3" />
            </div>
          ))
        ) : (
          <FaqLoadingState />
        )}
      </div>
    </div>
  );
};

export default FaqSection;

const FaqLoadingState = () => {
  return (
    <div className="w-full">
      <Skeleton count={3} className="h-5 my-2" />
    </div>
  );
};
