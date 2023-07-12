const path = require('path');
// var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = () => {
    console.log(process.env.NODE_ENV);

    return {
        entry: [
            './src/index.js',
        ],
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            filename: 'bundle.js',
        },
        mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
        // devServer: {
        //     proxy: {
        //         "/api": "http://localhost:3000",
        //     }
        // },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,  // /\.(js|jsx)$/
                    exclude: /node_modules/,
                    // use: ['@babel/preset-env', '@babel/preset-react']
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    },
                },
                {
                    test: /.(css|scss)$/,
                    exclude: /node_modules/,
                    use: ['style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
            }),
        ]
    };
};