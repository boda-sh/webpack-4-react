const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  // Provides process.env.NODE_ENV with value production.
  // Enables FlagDependencyUsagePlugin, FlagIncludedChunksPlugin,
  // ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin,
  // SideEffectsFlagPlugin and UglifyJsPlugin.
  mode: "production",
  devtool: "source-map",
  // see https://webpack.js.org/configuration/optimization/
  optimization: {
    // minimize default is true
    minimizer: [
      // Optimize/minimize CSS assets.
      // Solves extract-text-webpack-plugin CSS duplication problem
      // By default it uses cssnano but a custom CSS processor can be specified
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        // only use MiniCssExtractPlugin in production and without style-loader
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    // Mini CSS Extract plugin extracts CSS into separate files.
    // It creates a CSS file per JS file which contains CSS.
    // It supports On-Demand-Loading of CSS and SourceMaps.
    // It requires webpack 4 to work.
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
