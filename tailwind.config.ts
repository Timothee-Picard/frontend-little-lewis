import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["Montserrat", "sans-serif"],
        'secondary': ["var(--built-titling)"],
      },
      borderWidth: {
        '5': '5px',
      },
      colors: {
        'appPink': '#D88DFF',
        'customPurpleDark': '#361B8B',
        'customPurple': '#5E32EC',
      },
      boxShadow: {
        'filters': '0 4px 0 #361B8B;'
      },
    },
  },
  plugins: []
};
export default config;
