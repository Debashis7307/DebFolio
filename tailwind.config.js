module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ef",
        secondary: "#081b29",
        dark: "#1f242d",
        darker: "#323946",
      },
      animation: {
        'slide-right': 'slideRight 1s ease forwards',
        'slide-left': 'slideLeft 1s ease forwards',
        'slide-top': 'slideTop 1s ease forwards',
        'slide-bottom': 'slideBottom 1s ease forwards',
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        slideTop: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        slideBottom: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}