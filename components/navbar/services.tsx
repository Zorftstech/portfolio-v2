"use client";
import { useAppContext } from "@/lib/context";
import hyphenateSpaces from "@/lib/helpers/hyphenateSpaces";
import Link from "next/link";
import { BiX } from "react-icons/bi";
import { SideWrapper } from "../shared/Wrappers";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
      className={`absolute lg:static top-[80px] h-[100dvh] overflow-y-auto 
        lg:h-auto overscroll-contain w-full inset-0 ${
          isShowingServices ? "block" : "hidden"
        }   pt-5
      pb-24 ${isOnDarkMode ? "bg-[#313134]" : "bg-white"}`}
    >
      <SideWrapper>
        <div className="lg:flex justify-between gap-10 xl:gap-20">
          {/* Heading */}
          <p
            className={`${
              isOnDarkMode ? "text-[#f5f5f5]/70" : "text-[#5F5E6C] "
            } font-bold tracking-wide min-w-[180px]`}
          >
            Explore Services
          </p>

          {/* Items */}
          <div className="flex flex-wrap gap-10 xl:gap-20 mt-10 lg:mt-1.5 w-full">
            {services?.length !== 0 ? (
              services?.map((item) => (
                <Link
                  href={`/services/${hyphenateSpaces(item.name)}?id=${item.id}`}
                  key={item.id}
                  className="w-full sm:w-auto block"
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
              ))
            ) : (
              <ServicesLoadingState />
            )}
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
      </SideWrapper>
    </div>
  );
};

export default Services;

export const ServicesLoadingState = () => {
  const filledArray = new Array(3).fill("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
      {filledArray.map((item, itemIndex) => (
        <div key={itemIndex} className="">
          <h1 className="text-2xl">
            <Skeleton />
          </h1>
          <p className="text-sm">
            <Skeleton count={5} />
          </p>
        </div>
      ))}
    </div>
  );
};
