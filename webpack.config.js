const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        main: "./src/index.ts"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "app-bundle.js",
        clean: true
    },
    resolve: {
        extensions: ['ts', 'tsx', 'js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.{png | webp | jpe?g | gif}$/i,
                loader: "file-loader"
            }
        ]
    },
    devServer: {
        static: "./dist",
        port: 4000,
        open: true,
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
}