const path = require('path'); // requiere el módulo path de node.js https://webpack.js.org/configuration/

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
};