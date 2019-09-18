// entry --> output
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css'})

  return {
    // Customize start file and output file
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
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
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}]
		},
    plugins: [
      CSSExtract
    ],
    // debugger tool that shows original source code outside of the bundle
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      // serves up bundle from memory
      // similiar to live-server, but with webpack specific config options
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
  }
  
  // babel vs webpack is different
  // loader (transforms a file before webpack uses it)
  
      // "babel-cli": "^6.24.1",
      // "babel-core": "^6.25.0",
  
}
}
