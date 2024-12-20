export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          "gold-gradient-from": "#FFE998",
          "gold-gradient-to": "#57370D",
        },
        animation: {
          'gradient-move': 'gradientMove 3s linear infinite',
        },
        keyframes: {
          gradientMove: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        },
      },
    },
  },
  plugins: [],
}
