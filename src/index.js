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
const axios = require("axios")
axios.get("/api/infor").then(res=>{
    console.log(res);
})
