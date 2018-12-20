module.exports = {
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
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
      },
    ]
  }
};