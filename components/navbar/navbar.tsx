"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import { SideWrapper } from "../shared/Wrappers";
import { usePathname } from "next/navigation";
import Services from "./services";
import Technologies from "./technologies";
import { Fade as Hamburger } from "hamburger-react";
import { MdOutlinePhoneCallback } from "react-icons/md";

const callsToAction = [
  { name: "Contact Us", href: "#", icon: FaArrowRight },
  { name: "Search", href: "#", icon: FaSearch },
];
const COLORS = ["bg-white", "bg-[#313134]"];

export default function Navbar() {
  const [navBG, setNavBG] = useState(COLORS[0]);
  const [isOnDarkMode, setIsOnDarkMode] = useState(false);
  const [isShowingServices, setIsShowingServices] = useState(false);
  const [IsShowingTechnologies, setIsShowingTechnologies] = useState(false);
  const [isShowingBackdrop, setIsShowingBackdrop] = useState(false);
  const pathname = usePathname();
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    if (pathname.includes("portfolio")) {
      setNavBG(COLORS[1]);
      setIsOnDarkMode(true);
    } else {
      setNavBG(COLORS[0]);
      setIsOnDarkMode(false);
    }
  }, [pathname]);

  const handleShowTechnolgies = (state: boolean) => {
    if (state) {
      if (isShowingServices) {
        setIsShowingServices(false);
      }
      setIsShowingTechnologies(true);
      setIsShowingBackdrop(true);
    } else {
      setIsShowingBackdrop(false);
      setIsShowingTechnologies(false);
    }
  };

  const handleShowServices = (state: boolean) => {
    if (state) {
      if (IsShowingTechnologies) {
        setIsShowingTechnologies(false);
      }
      setIsShowingBackdrop(true);
      setIsShowingServices(true);
    } else {
      setIsShowingBackdrop(false);
      setIsShowingServices(false);
    }
  };

  const handleHamburgerToggle = (toggled: boolean) => {
    if (toggled) {
      setHamburgerOpen(true);
    } else {
      if (isShowingServices) {
        setIsShowingServices(false);
      }
      if (IsShowingTechnologies) {
        setIsShowingTechnologies(false);
      }
      setHamburgerOpen(false);
    }
  };

  return (
    <nav
      className={`fixed z-[1111] w-full  ${
        isShowingBackdrop && "lg:h-[100dvh] bg-black/30 backdrop-blur"
      } overscroll-contain`}
      aria-label="Global"
    >
      <div
        className={`${navBG} overscroll-contain ${
          isHamburgerOpen && "h-[100dvh]"
        } lg:h-auto relative`}
      >
        <SideWrapper>
          <div className="flex gap-y-10 flex-col lg:flex-row items-center justify-between py-4">
            <div className="flex lg:block justify-between w-full lg:w-auto">
              <Link href={"/"} className="cursor-pointer">
                {isOnDarkMode ? (
                  <Image
                    src={"/zorfts-white-logo.png"}
                    width={220}
                    height={37}
                    alt="Zorfts Technologies Ltd"
                    className="w-full mx-auto"
                  />
                ) : (
                  <Image
                    src={"/zorfts-logo.svg"}
                    width={220}
                    height={37}
                    alt="Zorfts Technologies Ltd"
                    className="w-full mx-auto"
                  />
                )}
              </Link>

              <div className="block lg:hidden">
                <Hamburger
                  onToggle={(toggled) => handleHamburgerToggle(toggled)}
                  size={24}
                />
              </div>
            </div>

            <div className={`${isHamburgerOpen ? "block" : "hidden lg:block"}`}>
              <ul
                className={`flex flex-col lg:flex-row justify-center items-center
              gap-x-2.5 gap-y-6 font-bold lg:font-normal  ${
                isOnDarkMode ? "text-[#9897A7EE]" : "text-dark-gray"
              } text-base tracking-tight`}
              >
                <li>
                  <Link
                    href={"/about"}
                    className="no-underline cursor-pointer text"
                  >
                    About
                  </Link>
                </li>
                <li className="px-2">
                  <button
                    className="flex gap-1 items-center flex-row"
                    type="button"
                    onClick={() => handleShowServices(true)}
                  >
                    Services <RiArrowDownSLine className="text-2xl" />
                  </button>
                </li>
                <li className="px-2">
                  <Link
                    href={"/partners"}
                    className="no-underline cursor-pointer text"
                  >
                    Partners
                  </Link>
                </li>
                <li className="px-2">
                  <Link
                    href={"/portfolio"}
                    className="no-underline cursor-pointer text"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="px-2">
                  <button
                    className="flex gap-1 items-center flex-row"
                    type="button"
                    onClick={() => handleShowTechnolgies(true)}
                  >
                    Technologies <RiArrowDownSLine className="text-2xl" />
                  </button>
                </li>
                <li className="px-2 cursor-pointer">
                  <Link href={"/blog"}> Blog</Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href={"/talents"}
                    className="no-underline cursor-pointer text"
                  >
                    Talents
                  </Link>
                </li>
              </ul>
            </div>

            <div className={`${isHamburgerOpen ? "block" : "hidden lg:block"}`}>
              <ul className="flex flex-col lg:flex-row justify-center items-center gap-x-3 gap-y-6">
                <Link
                  href={"contact"}
                  className={`w-200px py-3 px-5 text-white ${
                    isOnDarkMode
                      ? "bg-transparent border-[#5F5E6C] border"
                      : "bg-[#004AAD]"
                  } rounded-3xl flex items-center flex-row gap-2 text-xs lg:text-sm`}
                >
                  <MdOutlinePhoneCallback className="text-[18px]" />
                  Contact Us
                </Link>
                <li>
                  <CiSearch
                    className={`text-2xl font-light ${
                      isOnDarkMode ? "text-[#EEEEEE]" : "text-[#1A1A1A]"
                    } `}
                  />
                </li>
              </ul>
            </div>
          </div>

          <Services
            isShowingServices={isShowingServices}
            handleShowServices={() => handleShowServices(false)}
            isOnDarkMode={isOnDarkMode}
          />

          <Technologies
            handleShowTechnologies={() => handleShowTechnolgies(false)}
            isShowingTechnologies={IsShowingTechnologies}
            isOnDarkMode={isOnDarkMode}
          />
        </SideWrapper>
      </div>
    </nav>
  );
}
