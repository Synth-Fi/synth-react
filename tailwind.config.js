module.exports = {
  purge: ['./src/**/*.{js,jsx}','./src/*.{js,jsx}','./public/index.html'],
  content: [
    // "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#207DFF',
      'pink': '#ff49db',
      'purple': '#B62EE0',
      'gray-dark': '#273444',
      "yellow": "#FFF620",
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}