/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.php", "./includes/*.php"],
  theme: {
    extend: {
      colors: {
        primary: "#F58634",
        primaryLight: "#FFC195",
        secondary: "#006EB6",
        secondaryLight: "#3388CC",
        text: "#000000",
        greyish: "#5E6372",
        light: "#FDDF7F",
        veryLight: "#e5e5ff",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
