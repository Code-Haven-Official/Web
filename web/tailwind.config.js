/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      'russo': ['Russo One', 'monospace']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
