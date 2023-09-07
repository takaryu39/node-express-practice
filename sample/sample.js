const {read,write} = require("./helper")

console.log("start");
const req = process.argv[2]

if(req === "read"){
    read()
}else if(req === "write"){
    write()
}else{
    console.error("エラー");
}

console.log(process.argv);
