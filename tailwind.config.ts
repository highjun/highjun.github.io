import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';
import flowbite from "flowbite-react/tailwind";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    colors: {
      primary: colors.blue
    }
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite-typography'),

  ],
};
export default config;
