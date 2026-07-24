/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#4886E3",
        brandDark: "#2F6BC4",
        ink: "#333333",
        paper: "#FFFFFF",
        soft: "#F5F7FA",
      },
      fontFamily: {
        sans: ["'Source Sans Pro'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
}
