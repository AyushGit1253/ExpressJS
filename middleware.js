const http=require('http')

const express=require('express')

const bodyParser=require('body-parser')

/*
The body-parser is a middleware in Express.js that is used to parse the request body in different formats, 
such as JSON, URL-encoded, or multipart/form-data.
 When a client sends data to the server in the body of a request 
 (e.g., when submitting a form or sending JSON data), the body-parser middleware is responsible for extracting 
 and parsing that data, making it accessible in the req.body object.
*/

const app=express()// creates an express application
//adding middleware

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    res.send(
    `<form action="/product" method="POST"><input type="text" name="uname"><input type="text" name="size"><button type="submit">Send</button></form>`)
})

app.use('/product',(req,res,next)=>{
    const uname=req.body.uname
    const size=req.body.size
    console.log(uname)
    console.log(size)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>welcome to express.js</h1>')
})

app.listen(3000)