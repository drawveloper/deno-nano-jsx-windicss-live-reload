const helpers = require("windicss/helpers");
const typography = require("windicss/plugin/typography");

module.exports = helpers.defineConfig({
  extract: {
    include: [
      'src/components/*.tsx',
      'src/global.css',
    ],
  },  
  theme: {
    extend: {
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [
    typography({
      modifiers: ["DEFAULT", "sm", "lg", "red"],
    }),
  ],
});
