/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				milk: "#faeade",
				"dark-brown": "#523122",
				"mid-brown": "#a26833",
				"light-brown": "#e3a458",
				"red-brown": "#7f3b2d",
			},
			fontFamily: {
				sans: ["Antonio", "sans-serif"],
				paragraph: ["ProximaNova", "sans-serif"],
			},
		},
	},

	plugins: [],
};
