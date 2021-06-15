module.exports = {
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow : {
          "light": '#F3F7FD'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
