/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      dangrek: ['Dangrek'],
      Sarif: ['Times New Roman'],
      fontNavbar: ['Libre Baskerville'],
      unicaOne: ['Unica One'],
      firaSans: ['Fira Sans'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      notfound: '8rem',
      giantFont: '13rem',
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
