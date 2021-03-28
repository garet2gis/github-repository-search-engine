import path from "path";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as webpack from "webpack";
import {merge} from "webpack-merge";
import common from "./webpack.config";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config = merge(common, {
    entry: [
        "react-hot-loader/patch", // activate HMR for React
        "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
        "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
        "./src/index.tsx", // the entry point of our app
    ],
    mode: 'development',
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: { 'react-dom': '@hot-loader/react-dom'  },
    },
    devtool: 'source-map',
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint: {
                files: "./src/**/*.{ts,tsx,js,jsx}",
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        hot: true,
    },
});

export default config;