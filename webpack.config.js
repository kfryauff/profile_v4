const path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-1']
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader", // compiles Sass to CSS
          options: {
            includePaths: ["styles"]
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  mode: process.env.NODE_ENV || 'development'
}
