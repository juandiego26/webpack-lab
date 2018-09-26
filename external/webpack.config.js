const path = require('path'); // requiere el módulo path de node.js https://webpack.js.org/configuration/

module.exports = {
  mode: 'development',
  entry: './external/index.js',
  //entry: path.resolve(__dirname, 'index.js'), // pregunta para rutas absolutas
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};