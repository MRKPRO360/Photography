/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit,minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
