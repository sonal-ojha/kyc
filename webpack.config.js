var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        // extensions: ['.js', '.jsx']
        extensions: ['.js', '.es6']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|pdf)$/,
                loader: 'file-loader',
                options: {
                    limit: 8192
                }
            },
            {
                rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }]
            }

        ]
    },
    node: {
        fs: 'empty'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer: {
        historyApiFallback: true
    }
}