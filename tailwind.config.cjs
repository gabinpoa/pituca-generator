/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: 'rgb(212, 152, 202)',
      },
      backgroundImage: {
        dog: "url('https://pitucadomax.vercel.app/assets/dog.affb3a3c.png')",
      },
      fontFamily: {
        balsamiq: "'Balsamiq Sans', cursive;",
        nunito: "'Nunito', sans-serif;",
      },
    },
  },
  plugins: [],
};
