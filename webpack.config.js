// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/translations.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle filename
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  mode: 'development',
  watch: true
};
