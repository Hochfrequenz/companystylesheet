module.exports = {
  plugins: [
    require('autoprefixer')({
      // Target browsers to add prefixes for
      overrideBrowserslist: [
        '> 1%',              // Browsers with more than 1% global usage
        'last 2 versions',   // The last 2 versions of each browser
        'Firefox ESR',       // Firefox Extended Support Release
        'not dead',          // Excludes browsers without updates in last 24 months
      ],
    }),
  ],
};
