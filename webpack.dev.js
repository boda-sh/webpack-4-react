const path = require("path");
const merge = require("webpack-merge");
const historyApiFallback = require("koa2-connect-history-api-fallback");

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
    // see https://github.com/webpack-contrib/webpack-serve#options
    content: path.resolve(__dirname, "dist"),
    add: (app, middleware, options) => {
      // SPA are usually served through index.html so when the user refresh from another
      // location say /about, the server will fail to GET anything from /about. We use
      // HTML5 History API to change the requested location to the index we specified
      app.use(historyApiFallback());
    }
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
