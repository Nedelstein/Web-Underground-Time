const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin")
  .default;
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
  ) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
const versionUUID = create_UUID();

module.exports = {
  entry: {
    p5Circle: "./src/p5Circle.js",
    smoke2: "./src/smoke2.js"
  },
  output: {
    // filename: "[name].bundle.js",
    filename: `${versionUUID}/[hash].js`,
    path: path.resolve(__dirname, "../docs")
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          { loader: "css-loader" },
          { loader: "sass-loader" },
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: path.join(__dirname, "./postcss.config.js")
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    chrome: 52
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${versionUUID}/[hash].css`,
      // filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin(),
    new HTMLInlineCSSWebpackPlugin(),
    new HtmlWebpackPlugin({
      // inlineSource: ".(css)$",
      inject: true,
      // template: path.resolve(__dirname, "../src/index.html"),
      template: "./src/index.html",
      filename: `${versionUUID}/index.html`
    })
    // new HtmlWebpackInlineSourcePlugin()
  ]
};
