export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#BB9029",       // Doré
        lightGold: "#CAAA35",  // Or plus clair
        beige: "#FDF8E8",      // Beige doux pour fonds
        lavender: "#6A5ACD",   // Bleu lavande lumineux pour titres
        charcoal: "#4A4A4A",   // Gris doux pour le texte
        yellow: "#FFD700",     // Jaune doré pour les boutons
        paleYellow: "#FFEC8B", // Jaune pastel pour hover
        skyBlue: "#87CEFA",    // Bleu ciel pour accents ou icônes
        black: "#000000",      // Noir pour fond ou texte
        white: "#FFFFFF",      // Blanc classique
      },
    },
  },
  plugins: [],
}
