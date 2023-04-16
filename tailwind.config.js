/** @type {import('tailwindcss').Config} */
import { colors } from "./src/styles"
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffe6f2",
          200: "#fae4dA",
          300: "#f7bac1",
          400: "#ff0080"
        },
        secondary: "#565676",
        white: "#ffffff",
      },
      fontFamily: {
        body: [],
      },
    },
  },
  plugins: [],
}
