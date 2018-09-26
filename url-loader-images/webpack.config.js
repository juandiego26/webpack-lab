const path = require('path'); // requiere el módulo path de node.js https://webpack.js.org/configuration/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  // entry: './external/index.js',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      },
      // aquí van los loader
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo del tipo de la extensión
        test: /\.css$/, // expresion regular que le dice que me lea los archivos con extensión .css
        use: [
          // que loaders vamos a utilizar
          //'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/dist/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    })
  ]
};