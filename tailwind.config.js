module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      fg: "#FFFFFF",
      "variant": {
        1: "#6971FC",
        2: "#9EA4FF",
        3: "#69A4FC"
      },
      gray: "#E4E4E4"
    }
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
