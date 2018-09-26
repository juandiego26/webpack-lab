const path = require('path'); // requiere el módulo path de node.js https://webpack.js.org/configuration/
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // entry: './external/index.js',
  entry: {
    modules: [ // modules.js así se va a llamar nuestro archivo final
      'react',
      'react-dom'
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    /** ya que vamos a liberar un archivo y ese archivo lo tiene que liberar el
     * navegador y tiene que estar con una referencia global para queque lo pueda entender
     * el segundo archivo que va a interpretar el código y como lo hacemos
     * con un parámtro del output que se llama library
 */
    library: '[name]' // nuestro library se va a llamar modules https://webpack.js.org/configuration/output/#output-library
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env', '@babel/preset-react'],
  //           plugins: ['@babel/plugin-transform-runtime']
  //         }
  //       }
  //     },
  //     {
  //       test: /\.(jpg|png|gif)$/,
  //       use: [
  //         {
  //           loader: 'url-loader',
  //           options: {
  //             limit: 100000
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       test: /\.(woff|eot|ttf|svg)$/,
  //       use: [
  //         {
  //           loader: 'file-loader',
  //           options: {
  //             outputPath: 'fonts/',
  //             publicPath: '../fonts/' // Esta es la parte importante
  //           }
  //         }
  //       ]
  //     },
  //     // aquí van los loader
  //     {
  //       // test: que tipo de archivo quiero reconocer,
  //       // use: que loader se va a encargar del archivo del tipo de la extensión
  //       test: /\.css$/, // expresion regular que le dice que me lea los archivos con extensión .css
  //       use: [
  //         // que loaders vamos a utilizar
  //         //'style-loader',
  //         MiniCssExtractPlugin.loader,
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             modules: true,
  //             importLoaders: 1
  //           }
  //         },
  //         'postcss-loader'
  //       ]
  //     },
  //     {
  //       // test: que tipo de archivo quiero reconocer,
  //       // use: que loader se va a encargar del archivo del tipo de la extensión
  //       test: /\.scss$/, // expresion regular que le dice que me lea los archivos con extensión .css
  //       use: [
  //         // que loaders vamos a utilizar
  //         //'style-loader',
  //         MiniCssExtractPlugin.loader,
  //         'css-loader',
  //         "sass-loader"
  //       ]
  //     },
  //     {
  //       // test: que tipo de archivo quiero reconocer,
  //       // use: que loader se va a encargar del archivo del tipo de la extensión
  //       test: /\.styl$/, // expresion regular que le dice que me lea los archivos con extensión .css
  //       use: [
  //         // que loaders vamos a utilizar
  //         //'style-loader',
  //         MiniCssExtractPlugin.loader,
  //         'css-loader',
  //         {
  //           loader: "stylus-loader",
  //           options: {
  //             use: [
  //               require('nib'),
  //               require('rupture')
  //             ],
  //             import: [
  //               '~nib/lib/nib/index.styl',
  //               '~rupture/rupture/index.styl', // la virgulilla ~ es la carpeta node_modules
  //             ]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       // test: que tipo de archivo quiero reconocer,
  //       // use: que loader se va a encargar del archivo del tipo de la extensión
  //       test: /\.less$/, // expresion regular que le dice que me lea los archivos con extensión .css
  //       use: [
  //         // que loaders vamos a utilizar
  //         //'style-loader',
  //         MiniCssExtractPlugin.loader,
  //         'css-loader',
  //         {
  //           loader: 'less-loader',
  //           options: {
  //             noIeCompact: true,
  //           }
  //         }
  //       ]
  //     },
  //   ]
  // },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: './css/[name].css'
    // })
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          test: 'vendor',
          enforce: true
        }
      }
    }
  }


};