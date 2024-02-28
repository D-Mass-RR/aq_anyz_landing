// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});

module.exports = {
  theme: {
    fontSize: {
      sm: "15px",
      base: "20px",
      lg: "25px",
      xl: "30px",
      "2xl": "50px",
      "3xl": "80px",
    },
    colors: {
      red: "#D90217",
      "light-red": "#FF4B5C",
      black: "#000",
      white: "#FFF",
    },
    screens: {
      sm: [{ min: "300px", max: "600px" }],
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        "sans-serif": ["Gilroy"],
        light: ["Gilroy-Light"],
      },
    },
  },
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms"), backfaceVisibility],
};
