const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {buildContent} = require('./scripts/buildContent');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_TOOL = NODE_ENV === 'development' && 'cheap-module-source-map';
const ENTRY_POINT = path.resolve('src', 'index.ts');
const OUTPUT_PATH = path.resolve(__dirname, 'dist');

const postcssLoader = {
  loader: require.resolve('postcss-loader'),
  options: {
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    ident: 'postcss',
    plugins: () => [
      require('postcss-import')(),
      require('postcss-nested')(),
      require('postcss-custom-properties')(),
      require('postcss-custom-media')(),
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        flexbox: 'no-2009',
      }),
    ],
  },
};

module.exports = {
  entry: ENTRY_POINT,
  mode: NODE_ENV,
  devtool: DEV_TOOL,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: OUTPUT_PATH,
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          postcssLoader,
        ],
      },
      {
        test: /\.png?$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        __env__: JSON.stringify(buildContent()),
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', {discardComments: {removeAll: true}}],
        },
        canPrint: true,
      }),
    ],
  },
};
