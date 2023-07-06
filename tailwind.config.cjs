/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      minHeight: {
        "10vh": "10vh",
        "60vh": "60vh",

        "80vh": "80vh",
        "90vh": "90vh",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
