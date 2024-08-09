const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
    "./app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx,js,jsx}",
    "pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ["var(--font-notosans)", ...fontFamily.sans],
        orbitron: ["var(--font-orbitron)", "var(--font-notosans)"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
