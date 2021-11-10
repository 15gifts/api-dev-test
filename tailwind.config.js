module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        p546: "546px",
      },
      colors: {
        lightgrey: "#f6f3fd",
        darkgrey: "#242424",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
