const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: {
    app: './index.js'
  },
  devServer: {
    hot: true,
    open: true
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/dist/' // hay que agregar esto para que se sirvan automáticamente
    //path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}