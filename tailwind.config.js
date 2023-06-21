/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: {
				light: colors.red["200"],
				DEFAULT: colors.red["500"],
				dark: colors.red["600"],
			},
			secondary: {
				light: colors.slate["200"],
				DEFAULT: colors.slate["500"],
				dark: colors.slate["600"],
			},
			success: {
				light: colors.teal["200"],
				DEFAULT: colors.teal["500"],
				dark: colors.teal["600"],
			},
			warning: {
				light: colors.amber["200"],
				DEFAULT: colors.amber["500"],
				dark: colors.amber["600"],
			},
			danger: {
				light: colors.red["200"],
				DEFAULT: colors.red["500"],
				dark: colors.red["600"],
			},
			muted: colors.gray["200"],
			white: colors.white,
			black: colors.black,
		},
	},
	plugins: [],
};
