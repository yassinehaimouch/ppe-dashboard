/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandgray: "#7A7A7A",
        brandblue: "#42A4DF",
      },
      boxShadow: {
        custom: "0px 0.5px 1px 0px rgba(0, 0, 0, 0.15)",
      },
      lineHeight: {
        default: "30px",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
