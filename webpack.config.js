const path = require('path');

module.exports = {
  entry: './src/index.js',  // Punto de entrada de tu aplicación
  output: {
    filename: 'bundle.js',  // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'),  // Directorio de salida
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Regla para manejar archivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
