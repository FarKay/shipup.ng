/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.02em",
      normal: "0",
    },
    fontFamily: {
      sans: "Lato, sans-serif",
    },

    extend: {},
  },
  plugins: [],
};
