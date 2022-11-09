/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{js,jsx}"],
  theme: {
    screens: {
      xs: { max: "576px" },
    },
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit,minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
