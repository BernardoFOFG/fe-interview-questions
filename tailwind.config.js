/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffbe39",
      },
      screens: {
        base: '320px'
      }
    },
  },
  plugins: [],
};
