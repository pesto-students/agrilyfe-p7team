/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px":"400px"
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "light-grey": "#E5EEE5",
        purple: "#7652C6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};