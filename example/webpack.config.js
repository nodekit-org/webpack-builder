const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.ts'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [
      '.js', 
      '.jsx', 
      '.ts', 
      '.tsx',
    ],
  },
};
