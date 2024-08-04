import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
	plugins: [react(), cssInjectedByJsPlugin()],
	build: {
		lib: {
			entry: "src/index.tsx",
			name: "ReactCountryDropdown",
			fileName: (format) => `react-country-dropdown.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
