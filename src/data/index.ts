export const links = [
	{ path: "/", name: "home" },
	{ path: "/services", name: "services" },
	{ path: "/resume", name: "resume" },
	{ path: "/work", name: "work" },
	{ path: "/contact-us", name: "contact" },
];

export const stats = [
	{
		num: 2,
		text: "Months of experience",
	},
	{
		num: 10,
		text: "Projects completed",
	},
	{
		num: 8,
		text: "Technologies mastered",
	},
	{
		num: 26,
		text: "Code commits",
	},
];

export const services = [
	{
		num: "01",
		title: "Web Development",
		description:
			"Creating stunning, responsive websites tailored to your business needs.",
		href: "",
	},
	{
		num: "02",
		title: "Mobile App Development",
		description:
			"Building sleek and user-friendly mobile applications for Android and iOS platforms.",
		href: "",
	},
	{
		num: "03",
		title: "SEO Optimization",
		description:
			"Boosting your online presence with targeted SEO strategies that drive traffic.",
		href: "",
	},
	{
		num: "04",
		title: "Digital Marketing",
		description:
			"Crafting compelling digital marketing campaigns to engage your audience and grow your brand.",
		href: "",
	},
];

// Resume page data :-
//----------------------------------------------

// about data
export const about = {
	title: "About me",
	description:
		"I am a passionate web developer focused on creating user-friendly, efficient, and responsive websites.",

	info: [
		{
			fieldName: "Name",
			fieldValue: "Abishai Kashif",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+92) 31726-48144",
		},
		{
			fieldName: "Experience",
			fieldValue: "Fresher",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Pakistan",
		},
		{
			fieldName: "Email",
			fieldValue: "abishaikashif975@gmail.com",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
		{
			fieldName: "Languages",
			fieldValue: "English, Urdu",
		},
	],
};

// skills data
export const partialSkills = {
	title: "My Skills",
	description:
		"Proficient in web development, consistently learning and adapting to new technologies.",
};

//----------------------------------------------
// Resume page data ends here :-

// export const projects = [
// 	{
// 		num: "01",
// 		category: "frontend",
// 		title: "Responsive Website",
// 		description:
// 			"Creating a responsive website using HTML5, CSS3, and JavaScript.",
// 		stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
// 		image: "/assets/work/dashboard.png",
// 		live: "https://example.com/responsive",
// 		github: "https://github.com/username/responsive",
// 	},
// 	{
// 		num: "02",
// 		category: "backend",
// 		title: "API Development",
// 		description: "Building a RESTful API using Node.js and Express.",
// 		stack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
// 		image: "/assets/work/birthday-project.png",
// 		live: "https://example.com/api",
// 		github: "https://github.com/username/api",
// 	},
// 	{
// 		num: "03",
// 		category: "fullstack",
// 		title: "E-commerce Platform",
// 		description:
// 			"Developing a full-stack e-commerce platform with React and Node.js.",
// 		stack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }],
// 		image: "/assets/work/positivus.png",
// 		live: "https://example.com/ecommerce",
// 		github: "https://github.com/username/ecommerce",
// 	},
// ];

export const projects = [
	{
		num: "01",
		category: "frontend",
		title: "Responsive Website",
		description: "Creating a responsive website using modern tech stack",
		stack: [
			{ name: "TypeScript" },
			{ name: "Next.js" },
			{ name: "Tailwind.css" },
		],
		image: "/assets/work/p_1.png",
		live: "https://positivus-topaz.vercel.app/",
		github: "https://github.com/Abishai-kashif/positivus",
	},
	{
		num: "02",
		category: "Fun",
		title: "Birthday Wisher",
		description: "Building a beautiful project for brother's birthday.",
		stack: [
			{ name: "TypeScript" },
			{ name: "Next.js" },
			{ name: "Tailwind.css" },
		],
		image: "/assets/work/p_2.png",
		live: "https://birthday-wisher-for-bro.vercel.app",
		github: "https://github.com/Abishai-kashif/birthday_celebrator_for_bro",
	},
	{
		num: "03",
		category: "fullstack",
		title: "Acme Dasboard",
		description:
			"Developing a full-stack acme dasboard with Nextjs and PosgreDB.",
		stack: [
			{ name: "Next.js" },
			{ name: "Typescript" },
			{ name: "PostgreDB" },
		],
		image: "/assets/work/p_3.png",
		live: "https://acme-dashboard.vercel.app/dashboard",
		github: "nextjs-dashboard-six-jade-86.vercel.app",
	},
];

export const info = [
	{
		title: "Phone",
		description: "(+92) 31726 48144",
	},
	{
		title: "Email",
		description: "abishaikashif975@gmail.com",
	},
	{
		title: "Address",
		description: "Code Corner, Tech Town 13579",
	},
];
