const path = require('path');

module.exports = {
  entry: {
    app: './src/index.html'
  },
  module: {
    rules: {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  },
  devtool: 'inline-source-map',
  plugins: [
   
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};