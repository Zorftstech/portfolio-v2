"use client";
import Link from "next/link";
import { BiX } from "react-icons/bi";

const services = [
  {
    title: "development",
    list: [
      { name: "App development", link: "" },
      { name: "Game development", link: "" },
      { name: "Web development", link: "" },
    ],
  },
  {
    title: "design",
    list: [
      { name: "Brand identity design", link: "" },
      { name: "Graphics design", link: "" },
      { name: "App design", link: "" },
      { name: "Web design", link: "" },
    ],
  },
  {
    title: "others",
    list: [
      { name: "Cybersecurity", link: "" },
      { name: "IT consulting", link: "" },
      { name: "IT outsourcing", link: "" },
      { name: "Data analysis", link: "" },
    ],
  },
];

interface IServiceProps {
  isOnDarkMode: boolean;
  isShowingServices: boolean;
  handleShowServices: (state: boolean) => void;
}

const Services = ({
  handleShowServices,
  isOnDarkMode,
  isShowingServices,
}: IServiceProps) => {
  return (
    <div
      className={`absolute lg:static top-[80px] h-[100dvh]overflow-y-auto 
        lg:h-auto overscroll-contain ${
          isShowingServices ? "lg:flex" : "hidden"
        }  justify-between gap-10 xl:gap-20 pt-5
      pb-24 ${isOnDarkMode ? "bg-[#313134]" : "bg-white"}`}
    >
      {/* Heading */}
      <p
        className={`${
          isOnDarkMode ? "text-[#f5f5f5]/70" : "text-[#5F5E6C] "
        } font-bold tracking-wide`}
      >
        Explore Services
      </p>

      {/* Items */}
      <div className="flex flex-wrap gap-10 xl:gap-20 mt-10 lg:mt-1.5">
        {services.map((item, itemIndex) => (
          <div key={itemIndex} className="w-[45%] lg:w-auto">
            <p className="text-[#8F8F92] font-bold uppercase text-xs tracking-widest">
              {item.title}
            </p>
            {item.list.map((listItem, listItemIndex) => (
              <Link
                className={`text-sm md:text-base ${
                  isOnDarkMode ? "text-[#f5f5f5]/70" : "text-[##424247]"
                } block`}
                href={listItem.link}
                key={listItemIndex}
              >
                {listItem.name}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Close Button */}
      <button
        className="flex mt-20 lg:mt-0"
        type="button"
        onClick={() => handleShowServices(false)}
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

export default Services;
