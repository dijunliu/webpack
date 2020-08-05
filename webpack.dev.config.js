const path = require("path")
//! 1.plugin都是类函数 2.需要用require引入 3.传入参数方式和loader不同
//! loader通过module.rules.use.options配置，plugin通过向实例化类中传入
const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        //must absolute path
        path: path.resolve(__dirname, "./build"),
        filename: "main.js"
    },
    mode: "development",
    //各种模块（格式）文件加载规则
    //! loader执行顺序反方向
    module: {
        rules: [
            {
                //文件匹配
                test: /\.(png|jpe?g|gif)$/,
                //应用加载器
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name]_[hash:8].[ext]",
                            outputPath: "images/"
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            injectType: "singletonStyleTag"
                        }
                    },
                    "css-loader"]
            },
            {
                //文件匹配
                test: /\.woff2$/,
                //应用加载器
                use: ["file-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    //* 使用独立css文件输出
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    //* 添加浏览器前缀，配合autoprefixer插件
                    "postcss-loader",
                    "less-loader"
                ]
            }
        ]
    },
    //* 关联打包后的main.js文件与src下各js文件，错误定位
    devtool: "eval-source-map",
    devServer: {
        contentBase: "./build",
        port: 8081,
        open: true
    },
    plugins: [
        //* 使用html模板插件动态生成构建后的index.js入口页面
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "ldj.html"
        }),
        //* 清空output.path内的文件
        new CleanWebpackPlugin(),
        //* 提取css作为独立文件输出，配合MiniCssExtractPlugin.loader
        new MiniCssExtractPlugin({
            filename: "[name]_[chunkhash:8].css"
        })
    ]
}