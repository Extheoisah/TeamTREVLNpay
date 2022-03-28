module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      "blue-100": 'rgba(247, 250, 255, 1)',
      "blue-200": 'rgba(0, 141, 255, 0.12)',
      "blue-300": 'rgba(0, 141, 255, 0.3)',
      "blue-700": 'rgba(0, 141, 255, 1)',
      "grey-100": 'rgba(196, 196, 196, 1)',
      "grey-700": 'rgba(130, 132, 134, 1)',
      "green-700": 'rgba(18, 180, 73, 1)',
      red: "#FF0000"
    },
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
      header: ['Pacifico', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}
