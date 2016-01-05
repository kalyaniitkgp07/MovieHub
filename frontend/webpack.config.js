var path = require('path');
var webpack = require('webpack');
var devFlagPlugin = new webpack.DefinePlugin({  
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

// console.log('PROCESS>ENV:::', JSON.parse(process.env));

module.exports = {
  entry: "./jsx/app.jsx",
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      include: [
        path.resolve(__dirname, "jsx"),
      ],
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        plugins: ['transform-decorators-legacy' ],
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", '.jsx']
  },
  plugins: [  
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin
  ]
};