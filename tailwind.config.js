/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "576px" },
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit,minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
