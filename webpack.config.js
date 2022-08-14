const path = require('path');

module.exports = {
    entry: './src/scripts/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    devServer: {
        publicPath: "/",
        contentBase: "./src",
        hot: true
    },
}; 