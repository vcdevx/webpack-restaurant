const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: ['.', 'node_modules']
  },
  target: 'node', // use require() & use NodeJs CommonJS style
  externalsPresets: {
      node: true // in order to ignore built-in modules like path, fs, etc. 
  },
};