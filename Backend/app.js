const express = require("express");


const app = express();


app.get("/",(req,res)=>{
    res.send("hello jj")
})






module.exports = app