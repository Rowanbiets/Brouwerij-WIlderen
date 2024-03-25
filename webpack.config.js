const path = require("path");

module.exports = {
  entry: "./src/translations.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle filename
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use babel-loader to transpile JavaScript files
          options: {
            presets: ["@babel/preset-env"], // Use preset-env for automatic polyfilling
          },
        },
      },
      // Add rules for other file types if needed (e.g., JSON files)
     
    ],
  },
};
