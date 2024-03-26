import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '5': '5px',
      },
      colors: {
        'appPink': '#D88DFF',
      },
    },
  },
  plugins: [],
};
export default config;
