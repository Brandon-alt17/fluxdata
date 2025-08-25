/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "assets-globales-azul": "var(--assets-globales-azul)",
        "assets-globales-blanco": "var(--assets-globales-blanco)",
        "assets-globales-blanco-palido": "var(--assets-globales-blanco-palido)",
        "assets-globales-color-2": "var(--assets-globales-color-2)",
        "assets-globales-color-3": "var(--assets-globales-color-3)",
      },
    },
  },
  plugins: [],
};
