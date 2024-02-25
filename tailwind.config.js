module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy"],
      },
    },
  },
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
};
