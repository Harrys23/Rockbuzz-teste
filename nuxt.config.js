export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Rockbuzz-teste",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/css/main.scss"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["@/plugins/mirage.js"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build",
		// https://go.nuxtjs.dev/tailwindcss
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-fonts",
		"@nuxtjs/svg",
	],

	//Module for google-font: https://google-fonts.nuxtjs.org
	googleFonts: {
		families: {
			Roboto: [300, 500, 700],
		},
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// https://go.nuxtjs.dev/pwa
		"@nuxtjs/pwa",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: "en",
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};