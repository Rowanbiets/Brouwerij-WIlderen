const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    bieren: "./src/bieren.js",
    spirits: "./src/spirits.js",
    vroeger: "./src/vroeger.js",
    openingsuren: "./src/openingsuren.js",
    email: "./src/email.js",
    // Add entries for other scripts as needed
  },
  output: {
    filename: "[name].bundle.js", // Output bundle filename with placeholder for entry name
    path: path.resolve(__dirname, "docs"), // Output directory
  },
  mode: "development",
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
    ],
  },
};
