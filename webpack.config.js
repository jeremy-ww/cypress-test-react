const path = require("path");
const webpack = require("webpack");

/** @type {import('webpack').Configuration} */
const config = {
  entry: "./src/App.tsx",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
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
