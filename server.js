const express = require("express");
// 初始化服务器
const app = express();
// 配置路由
app.get("/api/infor",(req,res)=>{
    // 返回json数据
    res.json({
        name:"liudijun"
    })
})
// 设置监听端口
app.listen('9092')