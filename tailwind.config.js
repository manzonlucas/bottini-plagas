import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        montserrat: ['"Montserrat"', 'sans-serif'], // Replace with your font name
      },
      colors: {
        primary: '#e0e404', // Replace with your desired primary color
        background: '#F4F4F5', // Set your desired default background color
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
