import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		fontFamily: {
			primary: "var(--font-Ac)",
		},
		extend: {
			colors: {
				// primary: "#1c1c22",

				// I shuffle them for readability
				primary: "#ffffff",
				white: "#1c1c22",

				orange: {
					DEFAULT: "#ff8811", // orange
					hover: "#ff9e00",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
