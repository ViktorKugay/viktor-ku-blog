const configDefault = {
  presets: [require.resolve('babel-preset-react-app'), require.resolve('@babel/preset-typescript')],
};

const configNodeModules = {
  presets: [require.resolve('babel-preset-react-app/dependencies')],
};

module.exports = {
  ...configDefault,
  env: {
    development: configDefault,
    test: configDefault,
    production: configDefault,
    nodeModules: configNodeModules,
  },
};
