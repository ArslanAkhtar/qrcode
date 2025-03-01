import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
		},
	},
	compatibilityDate: "2024-11-01",
	css: ["~/assets/css/main.css"],
	devtools: { enabled: true },
	vite: {
		plugins: [tailwindcss()],
	},
});
