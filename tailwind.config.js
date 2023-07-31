/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#19A526",
        "secondary": "#006838",
        "tertiary": "#FF8500",
        "tertiaryLight": "#FFF4E7",
        "grayDark": "#646464",
        "grayRegular": "#909090",
        "grayThin": "#F9F9F9",
        "disable": "#BABABA",
        "blackC": "#404040",
        "border": "#F4F4F4"
      },
      fontFamily:{
        "poppins": ["Poppins", "sans-serif"],
        "gelasio": ["Gelasio", "serif"]
      }
    },
  },
  plugins: [],
}

