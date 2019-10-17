const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    mode: 'none',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                { loader: 'css-loader' },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins() {
                            return [
                                precss,
                                autoprefixer,
                            ];
                        },
                    },
                },
                { loader: 'sass-loader' },
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'fgas-bootstrap.css'
        })
    ]
};
