"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import { SideWrapper } from "./shared/Wrappers";
import { usePathname } from "next/navigation";

const callsToAction = [
	{ name: "Contact Us", href: "#", icon: FaArrowRight },
	{ name: "Search", href: "#", icon: FaSearch },
];

export default function Navbar() {
	const COLORS = ["bg-white", "bg-[#313134]"];
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [navBG, setNavBG] = useState(COLORS[0]);
	const [isOnDarkMode, setIsOnDarkMode] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (pathname.includes("portfolio")) {
			setNavBG(COLORS[1]);
			setIsOnDarkMode(true);
		}
	}, [pathname]);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 10;
			setIsScrolled(scrolled);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed z-[1111] w-full ${isScrolled && navBG}`}
			aria-label="Global">
			<SideWrapper>
				<div className="flex items-center justify-between py-4">
					<Link href={"/"} className="cursor-pointer">
						{isOnDarkMode ? (
							<Image
								src={"/zorfts-white-logo.png"}
								width={220}
								height={37}
								alt="Zorfts Technologies Ltd"
							/>
						) : (
							<Image
								src={"/zorfts-logo.svg"}
								width={220}
								height={37}
								alt="Zorfts Technologies Ltd"
							/>
						)}
					</Link>

					<div>
						<ul
							className={`flex justify-center items-center flex-row
              gap-x-3.5 ${
								isOnDarkMode ? "text-[#9897A7EE]" : "text-dark-gray"
							} text-base tracking-tight`}>
							<li>
								<Link
									href={"/about"}
									className="no-underline cursor-pointer text">
									About
								</Link>
							</li>
							<li className="px-2 flex gap-1 items-center flex-row">
								Services <RiArrowDownSLine className="text-2xl" />
							</li>
							<li className="px-2">Partners</li>
							<li className="px-2">Portfolio</li>
							<li className="px-2 flex gap-1 items-center flex-row">
								Technologies <RiArrowDownSLine className="text-2xl" />
							</li>
							<li className="px-2 cursor-pointer">
								<Link href={"/blog"}> Blog</Link>
							</li>
							<li>Talents</li>
						</ul>
					</div>

					<div>
						<ul className="flex justify-center items-center flex-row gap-x-4">
							<Link
								href={"contact"}
								className={`w-200px py-3 px-5 text-white ${
									isOnDarkMode
										? "bg-transparent border-[#5F5E6C] border"
										: "bg-[#004AAD]"
								} rounded-3xl flex items-center flex-row gap-2 text-sm`}>
								<Image
									src={"/vector-4.svg"}
									alt="icon"
									width={15.5}
									height={4}
								/>
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
			</SideWrapper>
		</nav>
	);
}
