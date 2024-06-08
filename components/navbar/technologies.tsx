import Link from "next/link";
import React from "react";
import { BiX } from "react-icons/bi";

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
  return (
    <div
      className={`absolute lg:static top-[80px] h-[100dvh] overflow-y-auto 
        lg:h-auto overscroll-contain ${
          isShowingTechnologies ? "lg:flex" : "hidden"
        }  justify-between gap-10 xl:gap-20 pt-5
      pb-24 ${isOnDarkMode ? "bg-[#313134]" : "bg-white"}`}
    >
      {/* Heading */}
      <div className="max-w-[200px]">
        <p
          className={`${
            isOnDarkMode ? "text-[#f5f5f5]/70" : "text-[#5F5E6C]"
          } font-bold tracking-wide`}
        >
          Technologies
        </p>
        <p className="text-[#8F8F92] text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas
          convallis arcu.
        </p>
      </div>

      {/* Items */}
      <div className="flex flex-wrap gap-10 xl:gap-20 mt-10 lg:mt-1.5">
        {technologies.map((item, itemIndex) => (
          <div key={itemIndex} className="">
            <p className="text-[#8F8F92] font-bold uppercase text-xs tracking-widest">
              {item.title}
            </p>
            {item.list.map((listItem, listItemIndex) => (
              <p
                className={`text-sm md:text-base ${
                  isOnDarkMode ? "text-[#f5f5f5]/70" : "text-[##424247]"
                } block`}
                key={listItemIndex}
              >
                {listItem}
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
  );
};

export default Technologies;
