import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This tells Tailwind to look inside your src folder
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#FFFFFF",
        accent: {
          DEFAULT: "#6366f1",
          dark: "#4338ca",
        },
        surface: "#111111",
      },
    },
  },
  plugins: [],
};
export default config;