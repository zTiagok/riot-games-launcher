/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {
      fontFamily: {
        typoldRegular: ['Typold Regular', 'sans-serif'],
        typoldThin: ['Typold Thin', 'sans-serif'],
        typoldBold: ['Typold Bold', 'sans-serif'],
        typoldMedium: ['Typold Medium', 'sans-serif'],
      },
      backgroundImage: {
        loginSplash: "url('./src/assets/images/login-splash.jpg')",
      },
      boxShadow: {
        app: '0 0 20px rgba(0, 0, 0, .5)'
      }
    },
  },
  plugins: [],
}
