/* eslint-disable */
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/webpack/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.frontend.json"
            }
          }
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "frontend", "assets", "js"),
  },
  devtool: "source-map"
};
