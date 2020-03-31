const path = require('path');
const webpack = require('webpack');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ASSET_PATH
  },
  devServer: {
      hot: true,
      port: 3000
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      services: path.resolve(__dirname, "./src/services"),
      assets: path.resolve(__dirname, "./assets/")
    },
    extensions: [".js", ".jsx", ".json", ".css", ".scss", ".sass"]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "> 0.25%, not dead, safari >= 7, ie > 10",
                  corejs: 3,
                  modules: false,
                  useBuiltIns: "entry"
                }
              ],
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
      new webpack.DefinePlugin({
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
      })
  ]
};