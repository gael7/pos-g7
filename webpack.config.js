var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: "source-map",
    context: path.join(__dirname, 'client'),
    entry: [
        './index.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
        ],
    },
    resolveLoader: {
        modules: ["node_modules"],
    },
    resolve: {
      modules: [
        path.join(__dirname, "src"),
        "node_modules"
    ]
  },

  plugins: [
  ]
};

module.exports = config;
