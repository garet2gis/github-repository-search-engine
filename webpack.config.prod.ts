import {merge} from 'webpack-merge'
import TerserWebpackPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';
import common from './webpack.config'
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


const config = merge(common, {
    mode: 'production',
    entry: "./src/index.tsx",
    devtool: false,
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            new TerserWebpackPlugin(),
            new OptimizeCSSAssetsWebpackPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
    },
});

export default config;