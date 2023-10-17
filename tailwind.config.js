/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      dangrek: ['Dangrek'],
      Sarif: ['Times New Roman'],
    },
    extend: {
      colors: {
        frColor: '#618264',
        scColor: '#79AC78',
      },
    },
  },
  plugins: [],
};
