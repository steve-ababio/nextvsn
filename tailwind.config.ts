import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "vsn-image":"url(/assets/images/bg2.svg)"
      },
      lineHeight:{
        "vsn26":"26px"
      },
      backgroundColor:{
        "vsn-btn":"#37C3FF",
        "vsn-btndeep":"#022E8A",
        "vsnlight":"white", 
        "vsnblue":"#022E8A"
      },
      textColor:{
        "vsnlight":"white",
        "vsnblue":"#022E8A",
        "vsnbluelight":"#37C3FF"
      },
      borderColor:{
        "vsnblue":"#022E8A",
      }
    },
  },
  plugins: [],
};
export default config;
