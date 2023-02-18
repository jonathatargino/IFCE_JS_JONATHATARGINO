// Configurações do Webpack

const path = require('path');

module.exports = {
  mode: 'development',
  // arquivo de entrada
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  // Configuração de loaders
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    },
    // Loaders de estilização CSS
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }
  ]
  },
  devtool: 'source-map',
}