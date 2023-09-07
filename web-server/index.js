const express = require('express')
const path = require('path')
const app = express()
app.use(express.urlencoded({express:false}))
app.use(express.static(path.join(__dirname,'public')))


 app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer
    if(answer === "2"){
        res.redirect("/correct.html")
    }else{
        res.redirect("/wrong.html")

        
    }
    })
// app.get('/', function (req, res) {
    
//   res.send('<h1>Top</h1>')
// })

// app.get('/api/v1/users', function (req, res) {
//   res.send({
//     name:"mike",
//     age:20
//   })
// })


app.listen(3000,()=>{
    console.log("run !");
})