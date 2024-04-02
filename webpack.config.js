const path = require("path");

module.exports = {
  entry: {
    translations: "./src/translations.js",
    bieren: "./src/bieren.js",
    spirits: "./src/spirits.js",
    vroeger: "./src/vroeger.js",
    openingsuren: "./src/openingsuren.js",
    swup: "./src/swup.js",

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


      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader for CSS files
      },

      {
        test: /\.html$/,
        use: ["html-loader"], // Use html-loader for HTML files
      },
{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
use: [
  {
    loader: 'file-loader',
    options:{
outputPath: 'images',
    }
  }
],
      }


    ],
  },
};
