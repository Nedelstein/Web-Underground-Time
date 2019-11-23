module.exports = {
  ident: "postcss",
  plugins: [
    require("postcss-preset-env")({
      browsers: "last 5 versions",
      stage: 4
    })
  ]
};
