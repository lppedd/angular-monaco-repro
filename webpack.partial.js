module.exports = {
  cache: false,
  module: {
    rules: [
      {
        test: /\.ttf$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // A couple of issues where this hack was mentioned:
              // https://github.com/microsoft/monaco-editor/issues/886#issuecomment-1188678096
              // https://github.com/webpack/webpack-dev-server/issues/1815#issuecomment-1181720815
              url: false,
            },
          },
        ],
      },
    ],
  },
};
