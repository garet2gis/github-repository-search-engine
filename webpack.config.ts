import path from "path";
import {Configuration as WebpackConfiguration} from "webpack";

import {Configuration as WebpackDevServerConfiguration} from "webpack-dev-server";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}


const config: Configuration = {
    mode: 'development',
    entry: "./src/index.tsx",
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 4000,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint: {
                files: "./src/**/*.{ts,tsx,js,jsx}",
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
                patterns: [
                    {
                        from: '**/*',
                        context: path.resolve(__dirname, 'src', 'assets'),
                        to: './assets',
                    }
                ]
            }
        ),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    devtool: 'source-map',
};

export default config;