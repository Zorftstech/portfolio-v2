export const partnersLogo = [
	{
		id: 1,
		src: "/mfa-logo.svg",
		name: "MyFoodAngels",
	},
	{
		id: 2,
		src: "/teqia-logo.svg",
		name: "Teqia Foundation",
	},
	{
		id: 3,
		src: "/provarex-logo.svg",
		name: "Provarex",
	},
	{
		id: 4,
		src: "/trayde-logo.svg",
		name: "Trayde By Zorfts Technologies",
	},
	{
		id: 5,
		src: "/repairfind-logo.svg",
		name: "RepairFind",
	},
	{
		id: 6,
		src: "/erlota-logo.svg",
		name: "Erlota",
	},
	{
		id: 7,
		src: "/chefzine-logo.svg",
		name: "ChefZine",
	},
	{
		id: 8,
		src: "/scaleup-logo.jpg",
		name: "ScaleUp Tech",
	},
	{
		id: 9,
		src: "/olabode-logo.png",
		name: "Olabode Consulting",
	},
];

export const footerLinks = [
	{
		id: 1,
		title: "Company",
		links: [
			{ id: 1, title: "About", link: "/about" },
			{ id: 2, title: "Technologies", link: "/technologies", urlTarget: "" },
			{ id: 3, title: "Services", link: "/services", urlTarget: "" },
			{ id: 4, title: "Contact Us", link: "/contact", urlTarget: "" },
			{ id: 5, title: "Careers", link: "/careers", urlTarget: "" },
			{ id: 6, title: "Hire Our Talents", link: "/talents", urlTarget: "" },
		],
	},
	{
		id: 2,
		title: "Services",
		links: [
			{ id: 1, title: "Web Design", link: "/", urlTarget: "" },
			{ id: 2, title: "App Development", link: "/", urlTarget: "" },
			{ id: 3, title: "Web Development", link: "/", urlTarget: "" },
			{ id: 4, title: "Brand Identity Design", link: "/", urlTarget: "" },
			{ id: 5, title: "Game Development", link: "/", urlTarget: "" },
			{ id: 6, title: "Data Analysis", link: "/", urlTarget: "" },
			{ id: 7, title: "IT Consultancy", link: "/", urlTarget: "" },
			{ id: 8, title: "IT Outsourcing", link: "/", urlTarget: "" },
		],
	},
	{
		id: 3,
		title: "Help",
		links: [
			{ id: 1, title: "Blog", link: "/blog", urlTarget: "" },
			{
				id: 2,
				title: "Terms & Conditions",
				link: "/terms-and-conditions",
				urlTarget: "",
			},
			{
				id: 3,
				title: "Privacy Policy",
				link: "/privacy-policy",
				urlTarget: "",
			},
			{ id: 4, title: "FAQs", link: "/faqs", urlTarget: "" },
			{ id: 5, title: "Help Center", link: "/help-center", surlTarget: "" },
		],
	},
	{
		id: 4,
		title: "Socials",
		links: [
			{
				id: 1,
				title: "Facebook",
				link: "https://www.facebook.com/profile.php?id=100082184714974&mibextid=ZbWKwL",
				urlTarget: "_blank",
			},
			{
				id: 2,
				title: "Instagram",
				link: "https://www.instagram.com/zorftstech?igsh=MXhndDB2dDk3OTE3Mw==",
				urlTarget: "_blank",
			},
			{
				id: 3,
				title: "Twitter",
				link: "https://twitter.com/zorftstech",
				urlTarget: "_blank",
			},
			{
				id: 4,
				title: "LinkedIn",
				link: "https://www.linkedin.com/company/zorfts-technologies/",
				urlTarget: "_blank",
			},
			{
				id: 5,
				title: "WhatsApp",
				link: "https://wa.link/f2jhr4",
				urlTarget: "_blank",
			},
		],
	},
];

// types.ts

export interface Content {
	id: number;
	title: string;
	description: string;
	img: string;
}

export interface Service {
	id: number;
	title: string;
	link: string;
	text: string;
	hoveredImageSrc: string;
	imageSrc: string;
	content: Content[] | null;
}

export const servicesData: Service[] = [
	{
		id: 1,
		title: "Website Design Services",
		link: "/services",
		text: "Create a user-friendly, visually stunning website that converts visitors into loyal customers. We build websites optimized for all devices, ensuring a seamless experience across desktops, tablets, and mobiles.",
		hoveredImageSrc: "/Vector-4.svg",
		imageSrc: "/Vector-3.svg",
		content: [
			{
				id: 1,
				title: "Websites",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-d.svg",
			},
			{
				id: 2,
				title: "Web Apps",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-c.svg",
			},
			{
				id: 3,
				title: "Web Portals",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-b.svg",
			},
			{
				id: 4,
				title: "E-Commerce",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-a.svg",
			},
		],
	},
	{
		id: 2,
		title: "Application Development Services",
		link: "",
		text: "Bring your mobile app idea to life, whether its a game-changing business tool or a consumer-facing application. We specialize in developing native apps for iOS and Android, ensuring a smooth and intuitive user experience.",
		hoveredImageSrc: "/Vector-4.svg",
		imageSrc: "/Vector-3.svg",
		content: null,
	},
	{
		id: 3,
		title: "Graphics Design Services",
		link: "",
		text: "Our design gurus create visually compelling app and web interfaces that are not only aesthetically pleasing but also strategically crafted to enhance user engagement and drive conversions.",
		hoveredImageSrc: "/Vector-4.svg",
		imageSrc: "/Vector-3.svg",
		content: [
			{
				id: 1,
				title: "Websites",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-d.svg",
			},
			{
				id: 2,
				title: "Web Apps",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-c.svg",
			},
			{
				id: 3,
				title: "Web Portals",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-b.svg",
			},
			{
				id: 4,
				title: "E-Commerce",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-a.svg",
			},
		],
	},
	{
		id: 4,
		title: "Brand Identity Design",
		link: "",
		text: "Establish a strong and recognizable brand presence with a logo, color scheme, and overall visual identity that resonates with your target audience.",
		hoveredImageSrc: "/Vector-4.svg",
		imageSrc: "/Vector-3.svg",
		content: [
			{
				id: 1,
				title: "Websites",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-d.svg",
			},
			{
				id: 2,
				title: "Web Apps",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-c.svg",
			},
			{
				id: 3,
				title: "Web Portals",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-b.svg",
			},
			{
				id: 4,
				title: "E-Commerce",
				description:
					"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet in neque et",
				img: "/services-a.svg",
			},
		],
	},
	{
		id: 5,
		title: "IT Consultation",
		link: "",
		text: "Get expert guidance on navigating the complex world of IT. Our consultants will assess your needs, recommend the best solutions, and help you develop a comprehensive IT strategy for the future.",
		hoveredImageSrc: "/Vector-4.svg",
		imageSrc: "/Vector-3.svg",
		content: null,
	},
	{
		id: 6,
		title: "Cyber Security Services",
		link: "",
		text: "Protect your valuable data and systems from cyber threats. We offer a range of cybersecurity solutions, including penetration testing, vulnerability assessments, and security awareness training, to safeguard your digital assets.",
		hoveredImageSrc: "/Vector-4.svg",
		imageSrc: "/Vector-3.svg",
		content: null,
	},
	{
		id: 7,
		title: "IT Outsourcing",
		link: "",
		text: "Free up your internal resources by outsourcing your IT needs to our team of experts. We provide ongoing IT support, system maintenance, and network management, allowing you to focus on your core business.",
		hoveredImageSrc: "/Vector-4.svg",
		imageSrc: "/Vector-3.svg",
		content: null,
	},
	{
		id: 8,
		title: "Data Analysis",
		link: "",
		text: " Unlock the power of your data. Our data analysts will help you turn raw data into actionable insights that inform your marketing strategies, product development, and overall business decisions.",
		hoveredImageSrc: "/Vector-4.svg",
		imageSrc: "/Vector-3.svg",
		content: null,
	},
];

export const whyChooseUs = [
	{
		id: 1,
		title: "Seamless Collaboration",
		text: "Your project is a partnership, not just a transaction. We believe in open communication and collaboration at every stage. Your input is invaluable, and we work closely with you to bring your vision to life.",
	},
	{
		id: 2,
		title: "All-Encompassing Solutions",
		text: "From conception to execution, we provide a holistic range of IT services under one roof. No need to juggle multiple vendors – we handle it all.",
	},
	{
		id: 3,
		title: "Future-Proof Technology",
		text: "We leverage cutting-edge advancements to ensure your solutions are not only functional today but adaptable for tomorrows challenges.",
	},
	{
		id: 4,
		title: "Relentless Innovation",
		text: "We are a team that thrives on challenges and embraces innovation. We constantly explore new technologies to stay ahead of the curve and deliver the best possible solutions.",
	},
	{
		id: 5,
		title: "Unwavering Security",
		text: "Cybersecurity is paramount. We prioritize robust security measures to protect your data and ensure the integrity of your systems.",
	},
	{
		id: 6,
		title: "Client-centric Approach",
		text: "Your satisfaction is our priority. We go extra mile to ensure that working with us is not just a project, but a positive and enriching experience",
	},
	{
		id: 7,
		title: "Future-Proof Technology",
		text: "We leverage cutting-edge advancements to ensure your solutions are not only functional today but adaptable for tomorrows challenges.",
	},
];

export interface Solution {
	id: number;
	title: string;
	img: string;
	description: string;
}

export interface WhatWeDid {
	id: number;
	description: string;
	solution: Solution[];
}

export interface SeeMoreProjects {
	id: number;
	img: string;
	title: string;
	text: string;
}

export interface PortfolioProject {
	id: number;
	nav_item: string;
	img: string;
	img_b: string;
	img_c: string;
	name: string;
	title: string;
	stack: string;
	date: string;
	timeline: string;
	problem_statement: string;
	what_we_did: WhatWeDid[];
	see_more_projects: SeeMoreProjects[];
	url: string;
}

export const portfolioProjects: PortfolioProject[] = [
	{
		id: 1,
		nav_item: "All",
		img: "/portfolio-a.svg",
		img_b: "/project-a.svg",
		img_c: "/myFoodAngels.svg",
		name: "MyFoodAngels",
		title: "Ecommerce Commerce",
		stack: "Design, Development",
		date: "2024",
		timeline: "5 months",
		problem_statement:
			"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
		what_we_did: [
			{
				id: 1,
				description:
					"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
				solution: [
					{
						id: 1,
						title: "design",
						img: "/sidePanel-a.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 2,
						title: "development",
						img: "/sidePanel-b.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 3,
						title: "deployment",
						img: "/sidePanel-c.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
				],
			},
		],
		see_more_projects: [
			{
				id: 1,
				img: "/project-a.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
			{
				id: 2,
				img: "/project-b.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
		],
		url: "",
	},
	{
		id: 2,
		nav_item: "Mobile App Development",
		img: "/portfolio-b.svg",
		img_b: "/project-b.svg",
		img_c: "/",
		name: "Erlota",
		title: "Ecommerce",
		stack: "Design, Development, Deployment",
		date: "2020",
		timeline: "1 week",
		problem_statement:
			"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
		what_we_did: [
			{
				id: 1,
				description:
					"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
				solution: [
					{
						id: 1,
						title: "design",
						img: "/sidePanel-a.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 2,
						title: "development",
						img: "/sidePanel-b.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 3,
						title: "deployment",
						img: "/sidePanel-c.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
				],
			},
		],
		see_more_projects: [
			{
				id: 1,
				img: "/project-a.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
			{
				id: 2,
				img: "/project-b.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
		],
		url: "",
	},
	{
		id: 3,
		nav_item: "Website Development",
		img: "/portfolio-c.svg",
		img_b: "/project-c.svg",
		img_c: "/",
		name: "MLB Foundation",
		title: "NGO Foundation",
		stack: "Design, Development, Deployment",
		date: "2024",
		timeline: "1 week",
		problem_statement:
			"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
		what_we_did: [
			{
				id: 1,
				description:
					"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
				solution: [
					{
						id: 1,
						title: "design",
						img: "/sidePanel-a.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 2,
						title: "development",
						img: "/sidePanel-b.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 3,
						title: "deployment",
						img: "/sidePanel-c.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
				],
			},
		],
		see_more_projects: [
			{
				id: 1,
				img: "/project-a.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
			{
				id: 2,
				img: "/project-b.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
		],
		url: "",
	},
	{
		id: 4,
		nav_item: "Brand Design",
		img: "/portfolio-d.svg",
		img_b: "/project-d.svg",
		img_c: "/",
		name: "Trayde NG",
		title: "Multi-vendor Ecommerce Platform",
		stack: "Design, Development, Deployment",
		date: "2023",
		timeline: "1 week",
		problem_statement:
			"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
		what_we_did: [
			{
				id: 1,
				description:
					"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
				solution: [
					{
						id: 1,
						title: "design",
						img: "/sidePanel-a.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 2,
						title: "development",
						img: "/sidePanel-b.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 3,
						title: "deployment",
						img: "/sidePanel-c.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
				],
			},
		],
		see_more_projects: [
			{
				id: 1,
				img: "/project-a.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
			{
				id: 2,
				img: "/project-b.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
		],
		url: "",
	},
	{
		id: 5,
		nav_item: "Graphics Design",
		img: "/portfolio-e.svg",
		img_b: "/project-d.svg",
		img_c: "/",
		name: "Trayde NG",
		title: "Multi-vendor Ecommerce Platform",
		stack: "Design, Development, Deployment",
		date: "2023",
		timeline: "1 week",
		problem_statement:
			"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
		what_we_did: [
			{
				id: 1,
				description:
					"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
				solution: [
					{
						id: 1,
						title: "design",
						img: "/sidePanel-a.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 2,
						title: "development",
						img: "/sidePanel-b.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 3,
						title: "deployment",
						img: "/sidePanel-c.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
				],
			},
		],
		see_more_projects: [
			{
				id: 1,
				img: "/project-a.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
			{
				id: 2,
				img: "/project-b.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
		],
		url: "",
	},
	{
		id: 6,
		nav_item: "Mobile App Development",
		img: "/portfolio-f.svg",
		img_b: "/project-d.svg",
		img_c: "/",
		name: "Trayde NG",
		title: "Multi-vendor Ecommerce Platform",
		stack: "Design, Development, Deployment",
		date: "2023",
		timeline: "1 week",
		problem_statement:
			"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
		what_we_did: [
			{
				id: 1,
				description:
					"The totality of the steps taken to achieve this project is a lot but we have been able to break down the process. In all, this project was a fun one.",
				solution: [
					{
						id: 1,
						title: "design",
						img: "/sidePanel-a.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 2,
						title: "development",
						img: "/sidePanel-b.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
					{
						id: 3,
						title: "deployment",
						img: "/sidePanel-c.svg",
						description:
							"We started out this project by several strategy sessions, trying to understand our customers, target audience, and out client needs. Afterwards, we proceeded to designing this amazing product for our client",
					},
				],
			},
		],
		see_more_projects: [
			{
				id: 1,
				img: "/project-a.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
			{
				id: 2,
				img: "/project-b.svg",
				title: "MyFoodAngels",
				text: "E-commerce company",
			},
		],
		url: "",
	},
];

export const Technologies = [
	{
		id: 1,
		src: "/Framer-1.svg",
		name: "MyFoodAngels",
	},
	{
		id: 2,
		src: "/Framer-2.svg",
		name: "Teqia Foundation",
	},
	{
		id: 3,
		src: "/CSS.svg",
		name: "Provarex",
	},
	{
		id: 4,
		src: "/C++.svg",
		name: "Trayde By Zorfts Technologies",
	},
	{
		id: 5,
		src: "/Java.svg",
		name: "RepairFind",
	},
	{
		id: 6,
		src: "/GO.svg",
		name: "RepairFind",
	},
	{
		id: 7,
		src: "/Node-js.svg",
		name: "RepairFind",
	},
	{
		id: 8,
		src: "/HTML.svg",
		name: "RepairFind",
	},
	{
		id: 9,
		src: "/Python.svg",
		name: "RepairFind",
	},
	{
		id: 10,
		src: "/React-js.svg",
		name: "RepairFind",
	},
	{
		id: 11,
		src: "/Framer-1.svg",
		name: "MyFoodAngels",
	},
	{
		id: 12,
		src: "/Framer-2.svg",
		name: "Teqia Foundation",
	},
	{
		id: 13,
		src: "/CSS.svg",
		name: "Provarex",
	},
	{
		id: 14,
		src: "/C++.svg",
		name: "Trayde By Zorfts Technologies",
	},
	{
		id: 15,
		src: "/Java.svg",
		name: "RepairFind",
	},
	{
		id: 16,
		src: "/GO.svg",
		name: "RepairFind",
	},
	{
		id: 17,
		src: "/Node-js.svg",
		name: "RepairFind",
	},
	{
		id: 18,
		src: "/HTML.svg",
		name: "RepairFind",
	},
	{
		id: 19,
		src: "/Python.svg",
		name: "RepairFind",
	},
	{
		id: 20,
		src: "/React-js.svg",
		name: "RepairFind",
	},
];

export const faqs = [
	{
		id: 1,
		question: "How long has Zorft Technologies been in business?",
		answer:
			"Zorft Technologies was founded in 20XX and has been serving clients with innovative technology solutions for over [number] years. Our journey is marked by a commitment to excellence, creativity, and client satisfaction.",
	},
	{
		id: 2,
		question: "What industries does Zorft Technologies specialize in?",
		answer:
			"Zorft Technologies was founded in 20XX and has been serving clients with innovative technology solutions for over [number] years. Our journey is marked by a commitment to excellence, creativity, and client satisfaction.",
	},
	{
		id: 3,
		question:
			"How does Zorft Technologies ensure data security and confidentiality?",
		answer:
			"Zorft Technologies was founded in 20XX and has been serving clients with innovative technology solutions for over [number] years. Our journey is marked by a commitment to excellence, creativity, and client satisfaction.",
	},
	{
		id: 4,
		question:
			"Does Zorft Technologies offer ongoing support and maintenance for projects?",
		answer:
			"Zorft Technologies was founded in 20XX and has been serving clients with innovative technology solutions for over [number] years. Our journey is marked by a commitment to excellence, creativity, and client satisfaction.",
	},
	{
		id: 5,
		question: " How can I request a custom quote for my project?",
		answer:
			"Zorft Technologies was founded in 20XX and has been serving clients with innovative technology solutions for over [number] years. Our journey is marked by a commitment to excellence, creativity, and client satisfaction.",
	},
];

export const blog = [
	{
		id: 1,
		title: "Development of AI in 2024",
		description:
			"The global community witnessed a breakthrough in Artificial Intelligence sometime in 2023",
		img: "/blog-a.svg",
	},
	{
		id: 2,
		title: "Development of AI in 2024",
		description:
			"The global community witnessed a breakthrough in Artificial Intelligence sometime in 2023",
		img: "/blog-b.svg",
	},
	{
		id: 3,
		title: "Development of AI in 2024",
		description:
			"The global community witnessed a breakthrough in Artificial Intelligence sometime in 2023",
		img: "/blog-c.svg",
	},
	{
		id: 4,
		title: "Development of AI in 2024",
		description:
			"The global community witnessed a breakthrough in Artificial Intelligence sometime in 2023",
		img: "/blog-b.svg",
	},
	{
		id: 5,
		title: "Development of AI in 2024",
		description:
			"The global community witnessed a breakthrough in Artificial Intelligence sometime in 2023",
		img: "/blog-a.svg",
	},
	{
		id: 3,
		title: "Development of AI in 2024",
		description:
			"The global community witnessed a breakthrough in Artificial Intelligence sometime in 2023",
		img: "/blog-c.svg",
	},
	{
		id: 4,
		title: "Development of AI in 2024",
		description:
			"The global community witnessed a breakthrough in Artificial Intelligence sometime in 2023",
		img: "/blog-b.svg",
	},
	{
		id: 5,
		title: "Development of AI in 2024",
		description:
			"The global community witnessed a breakthrough in Artificial Intelligence sometime in 2023",
		img: "/blog-a.svg",
	},
];
export const slides = [
	{
		mission:
			"To empower businesses through technology, creativity, and innovation, enabling them to achieve their goals and drive sustainable growth.",
	},
	{
		mission:
			"empower businesses through technology, creativity, and innovation, enabling them to achieve their goals and drive sustainable growth.",
	},
	{
		mission:
			"businesses through technology, creativity, and innovation, enabling them to achieve their goals and drive sustainable growth.",
	},
	{
		mission:
			"through technology, creativity, and innovation, enabling them to achieve their goals and drive sustainable growth.",
	},
];

export const valuesData = [
	{
		title: "Excellence",
		description: "Striving for excellence in everything we do.",
	},
	{
		title: "Collaboration",
		description:
			"Fostering collaborative relationships with clients, partners, and team members.",
	},
	{
		title: "Innovation",
		description:
			"Embracing creativity and innovation to solve complex challenges.",
	},
	{
		title: "Integrity",
		description:
			"Operating with honesty, transparency, and integrity in all our interactions.",
	},
];

export const partners = [
	{
		id: 1,
		src_1: "partner.svg",
		src_2: "partnersReview.svg",
		src_3: "benefitOfParnership.svg",
		name: "",
		text: "Joined Microsoft Partner Network in 2008. Since then, we have built profound expertise in Microsoft products and successfully apply it to projects in healthcare, retail, telecom, banking, and other industries. Among the products we work with are the Dynamics 365 suite, Power Apps, SharePoint, Power BI. We received",
		review:
			"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris.",
		benefit:
			"Partnering with Zorft Technologies offers a range of benefits, including access to cutting-edge technology, shared resources, and the opportunity to tap into new markets and industries",
	},
	{
		id: 2,
		src_1: "partner.svg",
		src_2: "partnersReview.svg",
		src_3: "benefitOfParnership.svg",
		name: "",
		text: "Joined Microsoft Partner Network in 2008. Since then, we have built profound expertise in Microsoft products and successfully apply it to projects in healthcare, retail, telecom, banking, and other industries. Among the products we work with are the Dynamics 365 suite, Power Apps, SharePoint, Power BI. We received",
		review:
			"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris.",
		benefit:
			"Partnering with Zorft Technologies offers a range of benefits, including access to cutting-edge technology, shared resources, and the opportunity to tap into new markets and industries",
	},
	{
		id: 3,
		src_1: "partner.svg",
		src_2: "partnersReview.svg",
		src_3: "benefitOfParnership.svg",
		name: "",
		text: "Joined Microsoft Partner Network in 2008. Since then, we have built profound expertise in Microsoft products and successfully apply it to projects in healthcare, retail, telecom, banking, and other industries. Among the products we work with are the Dynamics 365 suite, Power Apps, SharePoint, Power BI. We received",
		review:
			"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris.",
		benefit:
			"Partnering with Zorft Technologies offers a range of benefits, including access to cutting-edge technology, shared resources, and the opportunity to tap into new markets and industries",
	},
	{
		id: 4,
		src_1: "partner.svg",
		src_2: "partnersReview.svg",
		src_3: "benefitOfParnership.svg",
		name: "",
		text: "Joined Microsoft Partner Network in 2008. Since then, we have built profound expertise in Microsoft products and successfully apply it to projects in healthcare, retail, telecom, banking, and other industries. Among the products we work with are the Dynamics 365 suite, Power Apps, SharePoint, Power BI. We received",
		review:
			"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris.",
		benefit:
			"Partnering with Zorft Technologies offers a range of benefits, including access to cutting-edge technology, shared resources, and the opportunity to tap into new markets and industries",
	},
	{
		id: 5,
		src_1: "partner.svg",
		src_2: "partnersReview.svg",
		src_3: "benefitOfParnership.svg",
		name: "",
		text: "Joined Microsoft Partner Network in 2008. Since then, we have built profound expertise in Microsoft products and successfully apply it to projects in healthcare, retail, telecom, banking, and other industries. Among the products we work with are the Dynamics 365 suite, Power Apps, SharePoint, Power BI. We received",
		review:
			"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris.",
		benefit:
			"Partnering with Zorft Technologies offers a range of benefits, including access to cutting-edge technology, shared resources, and the opportunity to tap into new markets and industries",
	},
	{
		id: 6,
		src_1: "partner.svg",
		src_2: "partnersReview.svg",
		src_3: "benfitofpartnership.svg",
		name: "",
		text: "Joined Microsoft Partner Network in 2008. Since then, we have built profound expertise in Microsoft products and successfully apply it to projects in healthcare, retail, telecom, banking, and other industries. Among the products we work with are the Dynamics 365 suite, Power Apps, SharePoint, Power BI. We received",
		review:
			"Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. Purus tempus lectus imperdiet egestas libero et sit mauris.",
		benefit:
			"Partnering with Zorft Technologies offers a range of benefits, including access to cutting-edge technology, shared resources, and the opportunity to tap into new markets and industries",
	},
];

// blog

export interface Body {
	id: number;
	bannar: string;
}

export interface BlogDetails {
	id: number;
	img: string;
	title: string;
	user: string;
	img_b: string;
	date: string;
	time: string;
	body: Body[];
}

export interface Blog {
	id: number;
	title: string;
	description: string;
	img: string;
	link: string;
	blog_details: BlogDetails[];
}

export const blogs: Blog[] = [
	{
		id: 1,
		title: "Boost your conversion rate",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
		img: "/blog-a.svg",
		link: "/blog",
		blog_details: [
			{
				id: 1,
				img: "/blogDetails-a.svg",
				title: "Development of AI in 2024",
				user: "Deborah Oladeji",
				img_b: "/blogDetails-b.png",
				date: "4 March, 2024",
				time: "6 min read",
				body: [
					{
						id: 1,
						bannar: "/Bannar.svg",
					},
				],
			},
		],
	},
	{
		id: 2,
		title: "Boost your conversion rate",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
		img: "/blog-b.svg",
		link: "/blog",
		blog_details: [
			{
				id: 1,
				img: "/blogDetails-a.svg",
				title: "Development of AI in 2024",
				user: "Deborah Oladeji",
				img_b: "/blogDetails-b.png",
				date: "4 March, 2024",
				time: "6 min read",
				body: [
					{
						id: 1,
						bannar: "/Bannar.svg",
					},
				],
			},
		],
	},
	{
		id: 3,
		title: "AI in today's software development",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
		img: "/blog-c.svg",
		link: "/blog",
		blog_details: [
			{
				id: 1,
				img: "/blogDetails-a.svg",
				title: "Development of AI in 2024",
				user: "Deborah Oladeji",
				img_b: "/blogDetails-b.png",
				date: "4 March, 2024",
				time: "6 min read",
				body: [
					{
						id: 1,
						bannar: "/Bannar.svg",
					},
				],
			},
		],
	},
	{
		id: 1,
		title: "Boost your conversion rate",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
		img: "/blog-a.svg",
		link: "/blog",
		blog_details: [
			{
				id: 1,
				img: "/blogDetails-a.svg",
				title: "Development of AI in 2024",
				user: "Deborah Oladeji",
				img_b: "/blogDetails-b.png",
				date: "4 March, 2024",
				time: "6 min read",
				body: [
					{
						id: 1,
						bannar: "/Bannar.svg",
					},
				],
			},
		],
	},
	{
		id: 2,
		title: "Boost your conversion rate",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
		img: "/blog-b.svg",
		link: "/blog",
		blog_details: [
			{
				id: 1,
				img: "/blogDetails-a.svg",
				title: "Development of AI in 2024",
				user: "Deborah Oladeji",
				img_b: "/blogDetails-b.png",
				date: "4 March, 2024",
				time: "6 min read",
				body: [
					{
						id: 1,
						bannar: "/Bannar.svg",
					},
				],
			},
		],
	},
	{
		id: 3,
		title: "AI in today's software development",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
		img: "/blog-c.svg",
		link: "/blog",
		blog_details: [
			{
				id: 1,
				img: "/blogDetails-a.svg",
				title: "Development of AI in 2024",
				user: "Deborah Oladeji",
				img_b: "/blogDetails-b.png",
				date: "4 March, 2024",
				time: "6 min read",
				body: [
					{
						id: 1,
						bannar: "/Bannar.svg",
					},
				],
			},
		],
	},
];

//Testimonial card

export interface TestimonialCards {
	id: number;
	img: string;
	name: string;
	testimonie: string;
}

export const testimonialCards: TestimonialCards[] = [
	{
		id: 1,
		img: "/userImage.svg",
		name: "Sarah Lee, COO, Acme Supply Co.",
		testimonie:
			"We partnered with Zorfts Technologies to develop a custom inventory management system for our warehouse. Their team not only delivered a high-quality product on time and within budget, but they also took the time to understand our specific needs and workflows.",
	},
	{
		id: 2,
		img: "/userImage.svg",
		name: "Dr. David Chen, Founder, HealWell",
		testimonie:
			"As a startup in the healthcare industry, we needed a development agency that could translate our innovative ideas into a real-world solution. [Agency Name] exceeded our expectations. ",
	},
	{
		id: 3,
		img: "/userImage.svg",
		name: "Maria Rodriguez, VP of Product Development, GlobalCorp",
		testimonie:
			"We were initially hesitant to outsource our software development, but our experience with [Agency Name] has been nothing short of fantastic. Their communication has been clear and consistent throughout the entire project lifecycle.",
	},
	{
		id: 4,
		img: "/userImage.svg",
		name: "Michael Garcia, CTO, GreenTech Solutions",
		testimonie:
			"Our legacy software system was becoming increasingly cumbersome and outdated. We knew we needed a complete overhaul, but we weren't sure where to start. [Agency Name] came in and became our trusted advisors. ",
	},
	{
		id: 5,
		img: "/userImage.svg",
		name: "James Bond",
		testimonie:
			"They kept us informed of every step and were always receptive to our feedback. The finished product is exactly what we envisioned, and more importantly, it has helped us achieve our business goals.",
	},
	{
		id: 6,
		img: "/userImage.svg",
		name: "James Bond",
		testimonie:
			" Their developers are not just coders, they're problem-solvers and strategic thinkers. The new system they built is not only functional but also scalable, allowing us to grow and adapt to future needs. We're confident we've found a development partner for the long haul.",
	},
	{
		id: 7,
		img: "/userImage.svg",
		name: "James Bond",
		testimonie:
			"They took the time to understand our challenges and goals, then presented us with a comprehensive plan that addressed all our needs.",
	},
	{
		id: 8,
		img: "/userImage.svg",
		name: "James Bond",
		testimonie:
			"They brought a wealth of expertise to the table and helped us navigate the complexities of developing a HIPAA-compliant mobile app. We consider [Agency Name] a valuable extension of our team and look forward to a long-term partnership.",
	},

]

export interface PersonalData {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string;
	country: string;
	address: string;
	gender: string;
}

export interface JobApplication {
	id: number;
	personal_data: PersonalData[];
	resume: File;
    cover_letter: File;
    additional_attachment: File;
}

export interface YourRole {
	id: number;
	duty: string;
}

export interface YourSkills {
	id: number;
	skill: string;
}

export interface EmploymentType {
	id: number;
	type: string;
}

export interface Careers {
	id: number;
	department: string;
	summary: string;
	description: string;
	employment_type: EmploymentType[];
	your_role: YourRole[];
	your_skills: YourSkills[];
	job_application: JobApplication[];
}

export const careers: Careers[] = [
	{
		id: 1,
		department: 'Graphics Design',
		summary: 'As a graphics designer you will be creating visual text and imagery. You will also design creative content for online campaigns, print ads, websites, and even videos.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
		employment_type: [
			{
				id: 1,
				type: "Fulltime",
			},
			{
				id: 2,
				type: "Remote",
			},
			{
				id: 3,
				type: "Project Work",
			},
			{
				id: 4,
				type: 'Flexible Schedule',
			}
		],
		your_role: [
			{
				id: 1,
				duty: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ',
			},
			{
				id: 2,
				duty: 'Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ',
			},
			{
				id: 3,
				duty: 'ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ',
			},
			{
				id: 4,
				duty: 'pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
			}
		],
		your_skills: [
			{
				id: 1,
				skill: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ',
			},
			{
				id: 2,
				skill: 'Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ',
			},
			{
				id: 3,
				skill: 'ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ',
			},
			{
				id: 4,
				skill: 'pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
			}
		],
		job_application: [
			{
				id: 1,
				personal_data: [
					{
						id: 1,
						first_name: '',
						last_name: '',
						email: '',
						phone_number: '',
						country: '',
						address: '',
						gender: '',
					}
				],
				resume: new File([], 'resume.pdf'), // Placeholder file
				cover_letter: new File([], 'cover_letter.pdf'), // Placeholder file
				additional_attachment: new File([], 'additional_attachment.pdf'), // Placeholder file
			}
		]
	},
	{
		id: 2,
		department: 'Graphics Design',
		summary: 'As a graphics designer you will be creating visual text and imagery. You will also design creative content for online campaigns, print ads, websites, and even videos.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
		employment_type: [
			{
				id: 1,
				type: "Fulltime",
			},
			{
				id: 2,
				type: "Remote",
			},
			{
				id: 3,
				type: "Project Work",
			},
			{
				id: 4,
				type: 'Flexible Schedule',
			}
		],
		your_role: [
			{
				id: 1,
				duty: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ',
			},
			{
				id: 2,
				duty: 'Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ',
			},
			{
				id: 3,
				duty: 'ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ',
			},
			{
				id: 4,
				duty: 'pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
			}
		],
		your_skills: [
			{
				id: 1,
				skill: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ',
			},
			{
				id: 2,
				skill: 'Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ',
			},
			{
				id: 3,
				skill: 'ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ',
			},
			{
				id: 4,
				skill: 'pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
			}
		],
		job_application: [
			{
				id: 1,
				personal_data: [
					{
						id: 1,
						first_name: '',
						last_name: '',
						email: '',
						phone_number: '',
						country: '',
						address: '',
						gender: '',
					}
				],
				resume: new File([], 'resume.pdf'), // Placeholder file
				cover_letter: new File([], 'cover_letter.pdf'), // Placeholder file
				additional_attachment: new File([], 'additional_attachment.pdf'), // Placeholder file
			}
		]
	},
	{
		id: 3,
		department: 'Graphics Design',
		summary: 'As a graphics designer you will be creating visual text and imagery. You will also design creative content for online campaigns, print ads, websites, and even videos.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
		employment_type: [
			{
				id: 1,
				type: "Fulltime",
			},
			{
				id: 2,
				type: "Remote",
			},
			{
				id: 3,
				type: "Project Work",
			},
			{
				id: 4,
				type: 'Flexible Schedule',
			}
		],
		your_role: [
			{
				id: 1,
				duty: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ',
			},
			{
				id: 2,
				duty: 'Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ',
			},
			{
				id: 3,
				duty: 'ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ',
			},
			{
				id: 4,
				duty: 'pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
			}
		],
		your_skills: [
			{
				id: 1,
				skill: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ',
			},
			{
				id: 2,
				skill: 'Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ',
			},
			{
				id: 3,
				skill: 'ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ',
			},
			{
				id: 4,
				skill: 'pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
			}
		],
		job_application: [
			{
				id: 1,
				personal_data: [
					{
						id: 1,
						first_name: '',
						last_name: '',
						email: '',
						phone_number: '',
						country: '',
						address: '',
						gender: '',
					}
				],
				resume: new File([], 'resume.pdf'), // Placeholder file
				cover_letter: new File([], 'cover_letter.pdf'), // Placeholder file
				additional_attachment: new File([], 'additional_attachment.pdf'), // Placeholder file
			}
		]
	},
	{
		id: 4,
		department: 'Graphics Design',
		summary: 'As a graphics designer you will be creating visual text and imagery. You will also design creative content for online campaigns, print ads, websites, and even videos.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
		employment_type: [
			{
				id: 1,
				type: "Fulltime",
			},
			{
				id: 2,
				type: "Remote",
			},
			{
				id: 3,
				type: "Project Work",
			},
			{
				id: 4,
				type: 'Flexible Schedule',
			}
		],
		your_role: [
			{
				id: 1,
				duty: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ',
			},
			{
				id: 2,
				duty: 'Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ',
			},
			{
				id: 3,
				duty: 'ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ',
			},
			{
				id: 4,
				duty: 'pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
			}
		],
		your_skills: [
			{
				id: 1,
				skill: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ',
			},
			{
				id: 2,
				skill: 'Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ',
			},
			{
				id: 3,
				skill: 'ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ',
			},
			{
				id: 4,
				skill: 'pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
			}
		],
		job_application: [
			{
				id: 1,
				personal_data: [
					{
						id: 1,
						first_name: '',
						last_name: '',
						email: '',
						phone_number: '',
						country: '',
						address: '',
						gender: '',
					}
				],
				resume: new File([], 'resume.pdf'), // Placeholder file
				cover_letter: new File([], 'cover_letter.pdf'), // Placeholder file
				additional_attachment: new File([], 'additional_attachment.pdf'), // Placeholder file
			}
		]
	},
	{
		id: 5,
		department: 'Graphics Design',
		summary: 'As a graphics designer you will be creating visual text and imagery. You will also design creative content for online campaigns, print ads, websites, and even videos.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
		employment_type: [
			{
				id: 1,
				type: "Fulltime",
			},
			{
				id: 2,
				type: "Remote",
			},
			{
				id: 3,
				type: "Project Work",
			},
			{
				id: 4,
				type: "Flexible Schedule",
			},
		],
		your_role: [
			{
				id: 1,
				duty: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ',
			},
			{
				id: 2,
				duty: 'Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ',
			},
			{
				id: 3,
				duty: 'ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ',
			},
			{
				id: 4,
				duty: 'pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
			}
		],
		your_skills: [
			{
				id: 1,
				skill: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ',
			},
			{
				id: 2,
				skill: 'Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ',
			},
			{
				id: 3,
				skill: 'ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ',
			},
			{
				id: 4,
				skill: 'pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.',
			}
		],
		job_application: [
			{
				id: 1,
				personal_data: [
					{
						id: 1,
						first_name: '',
						last_name: '',
						email: '',
						phone_number: '',
						country: '',
						address: '',
						gender: '',
					}
				],
				resume: new File([], 'resume.pdf'), // Placeholder file
				cover_letter: new File([], 'cover_letter.pdf'), // Placeholder file
				additional_attachment: new File([], 'additional_attachment.pdf'), // Placeholder file
			}
		]
	}
]
