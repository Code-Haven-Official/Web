/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'monospace']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
