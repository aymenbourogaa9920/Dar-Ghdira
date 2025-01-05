export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        charcoal: "#1c1c1c",
        "light-charcoal": "#202020",
        "dark-gray": "#1c1c1c",

      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #F0E4B6, #D5B983, #B38A53, #6C3D11)",
        "dark-3d-gradient": "linear-gradient(180deg, #212224, #060608)",

        "charcoal-gradient": "linear-gradient(180deg, #333333, #1c1c1c)",

      },
    },
  },
  plugins: [],
}
