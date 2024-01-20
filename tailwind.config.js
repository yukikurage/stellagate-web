/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{purs,html,js}"],
  theme: {
    extend: {
      colors: {
        "stella-gray": {
          100: "#DCDCDC",
          200: "#A8A8A8",
          300: "#696969",
          400: "#212121",
        },
        "stella-blue": "#0000FF"
      },
      fontFamily: {
        sans: ["Silkscreen", "sans-serif"],
      },
    },
  },
  plugins: [],
}
