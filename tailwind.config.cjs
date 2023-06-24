/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    minHeight: {
      "10vh": "10vh",
      "80vh": "80vh",
      "90vh": "90vh",
    },
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
