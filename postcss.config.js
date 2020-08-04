module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    'postcss-import',
    'postcss-nested',
    'postcss-custom-properties',
    'postcss-custom-media',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
};
