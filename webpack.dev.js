const path = require("path");
const merge = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  // Provides process.env.NODE_ENV with value development.
  // Enables NamedChunksPlugin and NamedModulesPlugin.
  mode: "development",
  devtool: "inline-source-map",
  // configure `webpack-serve` options here
  serve: {
    // The path, or array of paths, from which static content will be served.
    // Default: process.cwd()
    content: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
