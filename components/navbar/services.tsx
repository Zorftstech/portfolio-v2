"use client";
import { useAppContext } from "@/lib/context";
import hyphenateSpaces from "@/lib/helpers/hyphenateSpaces";
import Link from "next/link";
import { BiX } from "react-icons/bi";

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
  const { store } = useAppContext();
  const { services } = store;
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
        {services?.map((item) => (
          <Link
            href={`/${hyphenateSpaces(item.name)}?id=${item.id}`}
            key={item.id}
            className="w-[45%] lg:w-auto block"
          >
            <p className="text-[#8F8F92] font-bold uppercase text-xs tracking-widest">
              {item.name}
            </p>
            {item.content.map((listItem) => (
              <p
                className={`text-sm md:text-base ${
                  isOnDarkMode ? "text-[#f5f5f5]/70" : "text-[##424247]"
                } block`}
                key={listItem.id}
              >
                {listItem.title}
              </p>
            ))}
          </Link>
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
