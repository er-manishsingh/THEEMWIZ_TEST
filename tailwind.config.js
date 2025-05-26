/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif"],
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
    },
  },
  plugins: [],
};
