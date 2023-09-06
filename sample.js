const fs = require('fs')
console.log("start");
// fs.writeFile("sample.text","Hello world" ,()=>{
//     console.log("書き出し完了");
// })

fs.readFile("./sample.txt","utf-8",(err,data)=>{
    console.log(data);
    

})