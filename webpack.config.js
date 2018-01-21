module.exports = {
  entry: "./public/js/main.js",
  output: {
    filename: "public/js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  }
};
