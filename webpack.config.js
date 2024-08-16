module.exports = {
  devtool: "source-map", // Enable source maps
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true, // This enables source maps for resolve-url-loader
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true, // This enables source maps for sass-loader
            },
          },
        ],
      },
    ],
  },
};
