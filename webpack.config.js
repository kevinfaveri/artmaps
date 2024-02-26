const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    'BitMapsRandomizerV1': './src/bitmaps/lib/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/bitmaps'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/bitmaps/art-example/index.html',
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: { compress: { conditionals: false } },
        minifyCSS: true,
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false,
      terserOptions: {
        mangle: {
          reserved: ['BitMapsRandomizerV1'],
        },
      },
    })],
  },
  mode: 'production',
};
