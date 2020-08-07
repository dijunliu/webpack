
// import { add } from './other'
// const m = require('./index.json')
// import pic from './1.png'
// import("./font/index.css")
// import("./other.less")

// console.log(123);

// const img = new Image()
// img.src = pic
// const root = document.getElementById("root")
// root.append(img)


// const axios = require("axios")
// axios.get("/api/infor").then(res => {
//     console.log(res);
// })

// HMR仅支持style-loader
// import("./style.css")


// const btn = document.createElement("button")
// btn.innerHTML = "add p"
// document.body.append(btn)
// btn.onclick = function () {
//     const d = document.createElement("div")
//     d.innerHTML = "text"
//     document.body.append(d)
// }

// import number from "./number"
// import counter from "./counter"

// counter()
// number()

// // HRM 手动监听JS模块
// // 确定是否开启hot
// if (module.hot) {
//     //配置监听的文件以及回调函数
//     module.hot.accept("./number.js", function () {
//         document.body.removeChild(document.getElementById("number"))
//         number()
//     })
// }

const arr = [new Promise(() => { }), new Promise(() => { })]

arr.map(item => {
    console.log(0);
})

// import React, { Component } from "react"
// import ReactDom from "react-dom"

// class APP extends Component{
//     render(){
//         return <div>hello react</div>
//     }
// }

// ReactDom.render(<APP/>,document.getElementById("app"))