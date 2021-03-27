import {merge} from 'webpack-merge'
import TerserWebpackPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';
import common from './webpack.config'
import HtmlWebpackPlugin from "html-webpack-plugin";


const config = merge(common, {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            new TerserWebpackPlugin(),
            new OptimizeCSSAssetsWebpackPlugin(),
        ],
    },
    devtool: false,
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
    ],
});

export default config;