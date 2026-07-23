/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#14213D",
        paper: "#FAF8F1",
        accent: "#B3261E",
        gold: "#C98A2C",
        slate: "#4A5268",
      },
    },
  },
  plugins: [],
}
