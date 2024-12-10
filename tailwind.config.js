/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        lexthin: ["Lexend-Thin", "sans-serif"],
        lexextralight: ["Lexend-ExtraLight", "sans-serif"],
        lexlight: ["Lexend-Light", "sans-serif"],
        lexregular: ["Lexend-Regular", "sans-serif"],
        lexmedium: ["Lexend-Medium", "sans-serif"],
        lexsemibold: ["Lexend-SemiBold", "sans-serif"],
        lexbold: ["Lexend-Bold", "sans-serif"],
        lexextrabold: ["Lexend-ExtraBold", "sans-serif"],
        lexblack: ["Lexend-Black", "sans-serif"],
      }
    },
  },
  plugins: [],
}