const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');

const contentPath = path.resolve('content.json');

const NODE_ENV = process.env.NODE_ENV || 'development';

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
  entry: './src/index.ts',
  mode: NODE_ENV,
  devtool: false,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', '..', 'dist'),
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
        __env__: JSON.stringify(require(contentPath)),
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
