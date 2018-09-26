const path = require('path'); // requiere el módulo path de node.js https://webpack.js.org/configuration/

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
      // aquí van los loader
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo del tipo de la extensión
        test: /\.css$/, // expresion regular que le dice que me lea los archivos con extensión .css
        use: ['style-loader', 'css-loader'] // que loaders vamos a utilizar
      }
    ]
  }
};