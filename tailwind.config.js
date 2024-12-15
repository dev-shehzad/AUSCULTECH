/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./main.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      sfui: ['SFUIDisplayLight', 'sans-serif'],
    },},
  },
  plugins: [],
}

