import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        'iransans':['IRANSans','sans-serif'],
        'iransansNumber':['iransansNumber']
      }
    },
    fontWeight:{
      thin:"100",
      ultraLight:"200",
      light:"300",
      regular:"400",
      medium:"500",
      demiBold:"600",
      bold:"700",
      Extrabold:"800",
      black:"900"

    },
  },
  plugins: [require('daisyui'),],
};
export default config;

