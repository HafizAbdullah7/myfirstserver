const express = require('express')
require ('dotenv').config()
const app = express()

const port = process.env.PORT || 4000

app.get('/', (req,res)=>{

    res.send("server is on now")

})


app.get('/instagram',(req,res)=>{
    res.send("<h2>server is showing you instagram<h2>")
})


app.get('/twitter',(req,res)=>{
    res.send(`<h1>server is showing you twitter on h1<h1>`)
})

app.listen(process.env.PORT ,()=>{

    console.log(`server is running on port ${port}`)
})

  