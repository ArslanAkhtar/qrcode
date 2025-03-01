module.exports = {
	content: ["./src/**/*.{js,jsx,ts,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					"slate-300": "#D5E1EF",
					"slate-500": "#68778D",
					"slate-900": "#1F314F",
				},
				secondary: "black",
			},
			fontFamily: {
				serif: ["serif"],
			},
			fontSize: {
				"2xl": "12.5rem",
			},
		},
	},
	plugins: [],
};
