const path = require('path'); // requiere el módulo path de node.js https://webpack.js.org/configuration/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  // entry: './external/index.js',
  entry: path.resolve(__dirname, 'src/js/index.js'),
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
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 100000,
              name: 'videos/[name].[hash].[ext]',
              publicPath: './dist/'
            }
          }
        ]
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '../fonts/' // Esta es la parte importante
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