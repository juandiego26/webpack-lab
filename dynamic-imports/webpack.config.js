const path = require('path'); // requiere el módulo path de node.js https://webpack.js.org/configuration/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // entry: './external/index.js',
  entry: {
    // vendor: [
    //   'react',
    //   'react-dom'
    // ],
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: path.resolve(__dirname, 'dist') + '/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import'
            ]
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
        test: /\.(woff|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
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
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo del tipo de la extensión
        test: /\.scss$/, // expresion regular que le dice que me lea los archivos con extensión .css
        use: [
          // que loaders vamos a utilizar
          //'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          "sass-loader"
        ]
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo del tipo de la extensión
        test: /\.styl$/, // expresion regular que le dice que me lea los archivos con extensión .css
        use: [
          // que loaders vamos a utilizar
          //'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "stylus-loader",
            options: {
              use: [
                require('nib'),
                require('rupture')
              ],
              import: [
                '~nib/lib/nib/index.styl',
                '~rupture/rupture/index.styl', // la virgulilla ~ es la carpeta node_modules
              ]
            }
          }
        ]
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo del tipo de la extensión
        test: /\.less$/, // expresion regular que le dice que me lea los archivos con extensión .css
        use: [
          // que loaders vamos a utilizar
          //'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              noIeCompact: true,
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         name: 'vendor',
  //         chunks: 'initial',
  //         test: 'vendor',
  //         enforce: true
  //       }
  //     }
  //   }
  // }


};