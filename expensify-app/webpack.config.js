// entry --> output
const path = require('path');

// console.log(path.join(__dirname, 'public'));
console.log(__dirname);

module.exports = {
  // Customize start file and output file
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // Customize webpack behavior on loading a specific file
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  // debugger tool that shows original source code outside of the bundle
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // serves up bundle from memory
    // similiar to live-server, but with webpack specific config options
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};

// babel vs webpack is different
// loader (transforms a file before webpack uses it)

    // "babel-cli": "^6.24.1",
    // "babel-core": "^6.25.0",
