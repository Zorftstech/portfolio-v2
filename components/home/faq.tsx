"use client";
import React from "react";
import { faqs } from "../data";

const FaqSection: React.FC = () => {
  return (
    <div className="py-24 mb-8">
      <div className="flex justify-center items-center">
        <h4 className="text-center bg-slate-300 p-2 rounded text-gray-600 w-[60px]">
          FAQ
        </h4>
      </div>
      <h2 className="text-[#004AAD] text-[64px] text-center leading-[74px] font-semibold">
        Any Questions?
      </h2>
      <p className="text-center font-normal leading-7 mt-4">
        At Zorft technologies, we make use of modern and efficient technology
        for our projects.
      </p>

      {/* ================== faq accordion ==================== */}
      <div className="mx-auto max-w-7xl mt-24">
        {faqs.map((faq) => (
          <div
            className="divide-y divide-solid divide-gray-500 w-[100%]"
            key={faq.id}
          >
            <details className="group" open={faq.id === 1}>
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                {faq.question}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div className="pb-4 text-secondary-500">{faq.answer}</div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
