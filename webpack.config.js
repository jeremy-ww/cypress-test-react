const path = require("path");
const webpack = require("webpack");

/** @type {import('webpack').Configuration} */
const config = {
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      cypress: path.resolve(__dirname, "./cypress"),
    },
  },
  // NOTE: we don't use webpack@5 yet.
  // cache: {
  //   type: "filesystem",
  //   buildDependencies: {
  //     config: [__filename],
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "test",
    }),
  ],
};

module.exports = config;
