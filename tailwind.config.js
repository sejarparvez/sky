/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#00ff00",
        pink: "#ff10f0",
      },
      screens: {
        md: "810px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
