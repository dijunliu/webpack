const path = require("path")
const glob = require("glob")

const setMpa = ()=>{
    const entry={}
    const htmlwebpackplugin=[]
    const entryFiles = glob.sync(path.join(__dirname,"./src/*/index.js"))
    entryFiles.map((entry,index)=>{
        const match = entry.match(/src\/(.*)\/index\.js/)
        const pageName = match&&match[1]
        console.log(typeof match);
    })
    return {entry,htmlwebpackplugin}
}

const {entry,htmlwebpackplugin}=setMpa()


module.exports = {
    entry,
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js"
    },
    mode: "development"
}