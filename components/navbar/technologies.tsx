import Link from "next/link";
import React from "react";
import { BiX } from "react-icons/bi";
import { SideWrapper } from "../shared/Wrappers";
import { useAppContext } from "@/lib/context";

const technologies = [
  {
    title: "CLOUDS",
    list: ["Digital Ocean", "Google Clouds", "Microsoft Azure", "AWS"],
  },
  {
    title: "Data Analysis",
    list: ["Excel", "Tableau"],
  },
  {
    title: "Test Automation Tools",
    list: ["Apache JMeter", "Appium", "Postman", "Protractor"],
  },
  {
    title: "CLOUDS",
    list: ["Digital Ocean", "Google Clouds", "Microsoft Azure", "AWS"],
  },
  {
    title: "CLOUDS",
    list: ["Digital Ocean", "Google Clouds", "Microsoft Azure", "AWS"],
  },
  {
    title: "Data Analysis",
    list: ["Excel", "Tableau"],
  },
  {
    title: "Test Automation Tools",
    list: ["Apache JMeter", "Appium", "Postman", "Protractor"],
  },
  {
    title: "CLOUDS",
    list: ["Digital Ocean", "Google Clouds", "Microsoft Azure", "AWS"],
  },
  {
    title: "Data Analysis",
    list: ["Excel", "Tableau"],
  },
  {
    title: "Test Automation Tools",
    list: ["Apache JMeter", "Appium", "Postman", "Protractor"],
  },
];

interface ITechnologiesProps {
  isOnDarkMode: boolean;
  isShowingTechnologies: boolean;
  handleShowTechnologies: (state: boolean) => void;
}

const Technologies = ({
  handleShowTechnologies,
  isOnDarkMode,
  isShowingTechnologies,
}: ITechnologiesProps) => {
  const { store } = useAppContext();
  const { technologies } = store;

  return (
    <div
      className={`absolute lg:static top-[80px] h-[100dvh] overflow-y-auto 
        lg:h-auto overscroll-contain w-full inset-0 ${
          isShowingTechnologies ? "block" : "hidden"
        }   pt-5
      pb-24 ${isOnDarkMode ? "bg-[#313134]" : "bg-white"}`}
    >
      <SideWrapper>
        <div className="lg:flex justify-between gap-10 xl:gap-20">
          {/* Heading */}
          <div className="max-w-[280px] min-w-[180px]">
            <p
              className={`${
                isOnDarkMode ? "text-[#f5f5f5]/70" : "text-[#5F5E6C]"
              } font-bold tracking-wide`}
            >
              Technologies
            </p>
            <p className="text-[#8F8F92] text-sm md:text-base">
              Zorfts Technologies Ltd creates custom software with cutting-edge
              technology, tailored to your needs and goals
            </p>
          </div>

          {/* Items */}
          <div className="flex flex-wrap gap-10 xl:gap-20 mt-10 lg:mt-1.5">
            {technologies?.map((item) => (
              <div key={item?.stack.id} className="w-full sm:w-auto block">
                <p className="text-[#8F8F92] font-bold uppercase text-xs tracking-widest">
                  {item?.stack.name}
                </p>
                {item?.technologies.map((listItem) => (
                  <p
                    className={`text-sm md:text-base ${
                      isOnDarkMode ? "text-[#f5f5f5]/70" : "text-[##424247]"
                    } block`}
                    key={listItem?.id}
                  >
                    {listItem?.name}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Close Button */}
          <button
            className="flex  mt-20 lg:mt-0"
            type="button"
            onClick={() => handleShowTechnologies(false)}
          >
            <BiX
              className={`text-3xl   ${
                isOnDarkMode ? "text-[#f5f5f5]/70" : "text-[#3B3D3F]"
              }`}
            />
          </button>
        </div>
      </SideWrapper>
    </div>
  );
};

export default Technologies;
