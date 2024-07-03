import { profile } from "console";
// Define the interface for the account details
export interface IAccount {
	id: number;
	img_1?: string;
	img_2?: string;
	img_3?: string;
  }
  
  // Define the interface for the bio data
export interface IBioData {
	id: number;
	profile_img: string;
	name: string;
	title: string;
	description: string;
	accounts: IAccount[];
  }
  
  // Define the interface for each talent
export interface ITalent {
	id: number;
	img: string;
	bg: string;
	skill: string;
	name: string;
	description: string;
	bio_data: IBioData[];
  }
  
  // Define the Talents array with the ITalent interface
export const Talents: ITalent[] = [
	{
		id: 1,
		img: "/talentImg.png",
		bg: "#004AAD",
		skill: "Graphics Designer",
		name: "John Doe",
		description:
			"John Doe is a proficient graphic designer with 3+ years experience",
		bio_data: [
			{
				id: 1,
				profile_img: '/talentsProfileImg.svg',
				name: 'Adeyemi Kolawole',
				title: 'Front End Developer',
				description: 'Jane Doe is an experienced Front End Developer adept at transforming design concepts into seamless web interfaces. Passionate about blending creativity with functionality, she specializes in crafting elegant, responsive, and intuitive user experiences.',
				accounts: [
					{
						id: 1,
						img_1: '/talentsLinkedIn.svg',
					},
					{
						id: 2,
						img_2: '/talentsBe.svg',
					},
					{
						id: 3,
						img_3: '/talentsGithub.svg',
					}
				]
			}
		]
	},
	{
		id: 2,
		img: "/talentImg.png",
		bg: "#F8B61B",
		skill: "Graphics Designer",
		name: "John Doe",
		description:
			"John Doe is a proficient graphic designer with 3+ years experience",
		bio_data: [
			{
				id: 1,
				profile_img: '',
				name: '',
				title: '',
				description: '',
				accounts: [
					{
						id: 1,
						img_1: '',
					},
					{
						id: 1,
						img_2: '',
					},
					{
						id: 1,
						img_3: '',
					}
				]
			}
		]
	},
	{
		id: 3,
		img: "/talentImg.png",
		bg: "#004AAD",
		skill: "Graphics Designer",
		name: "John Doe",
		description:
			"John Doe is a proficient graphic designer with 3+ years experience",
		bio_data: [
			{
				id: 1,
				profile_img: '',
				name: '',
				title: '',
				description: '',
				accounts: [
					{
						id: 1,
						img_1: '',
					},
					{
						id: 1,
						img_2: '',
					},
					{
						id: 1,
						img_3: '',
					}
				]
			}
		]
	},
	{
		id: 4,
		img: "/talentImg.png",
		bg: "#004AAD",
		skill: "Graphics Designer",
		name: "John Doe",
		description:
			"John Doe is a proficient graphic designer with 3+ years experience",
		bio_data: [
			{
				id: 1,
				profile_img: '',
				name: '',
				title: '',
				description: '',
				accounts: [
					{
						id: 1,
						img_1: '',
					},
					{
						id: 1,
						img_2: '',
					},
					{
						id: 1,
						img_3: '',
					}
				]
			}
		]
	},
	{
		id: 5,
		img: "/talentImg.png",
		bg: "#F8B61B",
		skill: "Graphics Designer",
		name: "John Doe",
		description:
			"John Doe is a proficient graphic designer with 3+ years experience",
		bio_data: [
			{
				id: 1,
				profile_img: '',
				name: '',
				title: '',
				description: '',
				accounts: [
					{
						id: 1,
						img_1: '',
					},
					{
						id: 1,
						img_2: '',
					},
					{
						id: 1,
						img_3: '',
					}
				]
			}
		]
	},
	{
		id: 6,
		img: "/talentImg.png",
		bg: "#004AAD",
		skill: "Graphics Designer",
		name: "John Doe",
		description:
			"John Doe is a proficient graphic designer with 3+ years experience",
		bio_data: [
			{
				id: 1,
				profile_img: '',
				name: '',
				title: '',
				description: '',
				accounts: [
					{
						id: 1,
						img_1: '',
					},
					{
						id: 1,
						img_2: '',
					},
					{
						id: 1,
						img_3: '',
					}
				]
			}
		]
	},
];
