module.exports = {
  content: [
    "./templates/**/*.ejs",
    "./views/**/*.ejs",
    "./public/build/**/*.css",
    "./public/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}