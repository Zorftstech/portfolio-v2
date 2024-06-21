"use client";
import React, { useEffect, useState } from "react";
import { faqs } from "../data";
import { IFaqData } from "@/lib/types";
import { fetchFaq } from "@/lib/apis/request";

const FaqSection: React.FC = () => {
  const [data, setData] = useState<IFaqData[]>([]);

  useEffect(() => {
    fetchFaq().then((res) => {
      setData(res?.data.results);
    });
  }, []);
  return (
    <div className="py-24 mb-8">
      <div className="flex justify-center items-center">
        <h4 className="text-center bg-slate-300 p-2 rounded text-gray-600 w-[49px] lg:w-[60px]">
          FAQ
        </h4>
      </div>
      <h2 className="text-[#004AAD] text-[28px] lg:text-[64px] text-center leading-[38px] lg:leading-[74px] font-semibold mt-10">
        Any Questions?
      </h2>
      <p className="text-center font-normal leading-7 mt-4">
        At Zorft technologies, we make use of modern and efficient technology
        for our projects.
      </p>

      {/* ================== faq accordion ==================== */}
      <div className="mx-auto max-w-7xl mt-24">
        {data?.map((faq) => (
          <div
            className="divide-y divide-solid divide-gray-500 w-[100%]"
            key={faq?.id}
          >
            <details className="group" open={faq.id === 1}>
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 textLg font-bold text-2xl text-secondary-900 group-open:text-primary-500">
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
              <div className="pb-4 text-secondary-400 leading-7 text-[16px] tracking-wide">{faq?.answer}</div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
