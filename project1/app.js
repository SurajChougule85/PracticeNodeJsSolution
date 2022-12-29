const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send("hii suraj , have great learning")
    
})

app.get('/about',(req,res)=>{
    res.send("we are in about page..")
    
})

app.listen(3000,()=>{
    console.log("connect to the server portno:3000")
})