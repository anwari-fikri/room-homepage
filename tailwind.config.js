/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "black": "hsl(0, 0%, 0%)",
        "white": "hsl(0, 0%, 100%)",
        "very-dark-gray": "hsl(0, 0%, 27%)",
      },
      fontSize: {
        "header": "28px",
        "body": "12px",
      },
      fontFamily: {
        "sans": ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
