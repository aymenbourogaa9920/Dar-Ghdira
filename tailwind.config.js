export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          gradient: "#000000c1", // Exemple de couleur pour un gradient
        },
        gold: {
          light: "#FCD895",
          medium: "#5F4421",
          dark: "#54391C",
          deep: "#8B6331",
        },
        text: {
          highlight: "#D5B983",
          gray: "#gray-400",
        },
      },
    },
  },
  plugins: [],
}
