import { add } from './other'
const m = require('./index.json')
import pic from './1.png'
import("./font/index.css")
import("./other.less")

console.log(pic);

const img = new Image()
img.src = pic
const root = document.getElementById("root")
root.append(img)

