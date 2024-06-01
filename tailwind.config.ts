import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        shade: "var(--shade)",
      },
      fontFamily: {
        sans: ["var(--font-fira-code)"],
        mono: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
