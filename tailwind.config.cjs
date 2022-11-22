/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'test': '5rem 1.75rem 1fr'
      }
    }
  },
  plugins: []
};
