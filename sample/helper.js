const fs = require('fs')
const person = {
    name:"Mike",
    age:20
}
const read = ()=>{
    fs.readFile("./name.txt",'utf-8',(err,data)=>{
         const person = JSON.parse(data)
        
        console.log(person);
        
    })
}
const write = ()=>{
    fs.writeFile("./name.txt",JSON.stringify(person),()=>{
        console.log("書き出し完了");  
    })
}
module.exports = {
    read,
    write
}