const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: path.resolve(__dirname, "../src", "index.js") },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        // in the `src` directory
        include: [path.resolve(__dirname, "../src")],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              // This enables local scoped CSS based in CSS Modules spec
              modules: {
                // discardDuplicates: true,
                // generates a unique name for each class (e.g. app__app___2x3cr)
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  output: {
    path: path.resolve(__dirname, "../", "build"),
  },
};
