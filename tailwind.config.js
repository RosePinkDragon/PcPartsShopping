module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        crimson: "#DC143C",
      },
    },
  },
  variants: {},
  plugins: [
    require('@fullhuman/postcss-purgecss')(
      {
        content: [

          './public/index.html'
        ],
        defaultExtractor: content => content.match(
          /[A-Za-z0-9-_:/]+/g
          || []
        )
      }
    )
  ],
};
