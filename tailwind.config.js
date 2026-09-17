/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'], display: ['Space Grotesk', 'sans-serif'] },
      colors: { ink: '#10120f', cream: '#f1eee5', lime: '#c7f36b', moss: '#929b77' },
    },
  },
  plugins: [],
};
