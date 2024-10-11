/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#365d56",
        secondary:"#1C3905",
        tertiary:"#9FE870"
      },
      screens: {
        xs: "475px",
        bigxl: "1920px"
      },
      fontFamily: {
        'tt-hoves': ['"TT Hoves"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
