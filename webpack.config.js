const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.imba$/,
                loader: 'imba/loader',
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    resolve: {
        extensions: ['.imba', '.js', '.json', '.scss']
    },
    entry: ['./src/app.imba', './src/app.scss'],
    output: {path: __dirname + '/build', filename: 'app.js'},
    plugins: [
        new ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin(),
        new CopyWebpackPlugin([
            {from: 'src/static'}
        ])
    ]
}