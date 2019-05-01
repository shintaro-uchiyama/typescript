const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    // ファイルタイプに対するloaderの設定
    rules: [
      {
        enforce: "pre",
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ? process.env.NODE_ENV : "development")
    }),
  ],
  devtool: 'source-map'
};