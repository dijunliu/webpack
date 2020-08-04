// * 配置postcss，引入autoprefixer插件，指定浏览器支持的版本
// * postcss为css提供模块化和添加前缀等功能
// ? 为什么仅仅大于1%
module.exports = {
    plugins: [
        require("autoprefixer")({
            overrideBrowserslist: ["last 2 version", ">1%"]
        })
    ]
}