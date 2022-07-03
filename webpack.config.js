const path = require('path');
const { SourceMapDevToolPlugin } = require("webpack");

const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/public',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        include: [__dirname + '/src'],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        include: [__dirname + '/src'],
        use: [{loader: 'style-loader'},{ loader: 'css-loader'}]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: [__dirname + '/src'],
        use: [{loader: 'file-loader'}]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    htmlPlugin,
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  }
};