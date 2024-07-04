const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  // Cambia a 'production' para producción
  entry: './src/index.js',  // Punto de entrada
  output: {
    filename: 'bundle.js',  // Archivo de salida
    path: path.resolve(__dirname, 'dist'),  // Directorio de salida
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Regla para archivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Ruta al archivo HTML de plantilla
    }),
  ],
};
