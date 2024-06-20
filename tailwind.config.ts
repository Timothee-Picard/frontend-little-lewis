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
      spacing: {
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%',
        '8/8': '100%',
      },
      backgroundSize: {
        full: '100%',
      }
    },
  },
  plugins: []
};
export default config;
