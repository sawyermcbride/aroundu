const path  = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/react-js/main.jsx',
    output: {
        path: './bin',
        filename: 'bundle.js'
    },
    modules: {
        loaders: [
            {
                test: "/\.jsx$/",
                include: './src/react-js',
                loader: 'babel-loader'
            }
        ]
    }
}