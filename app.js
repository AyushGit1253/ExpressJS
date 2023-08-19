const http=require('http')

const express=require('express')// ctrl+ left click get into express...it returns a function there

const app=express()// creates an express application
//adding middleware

app.use((req,res,next)=>{
    console.log('inside middleware1')
    next()//sends control to next middleware
})

app.use((req,res,next)=>{
    console.log('inside middleware2')
    next()
})

app.use((req,res,next)=>{
    console.log('inside middleware3')
    res.send('<h1>welcome to express.js</h1>')
})

//const server=http.createServer(app)
//already createServer is written inside kisten()
//server.listen(3000)

app.listen(3000)