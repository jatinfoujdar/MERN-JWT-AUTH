require("dotenv").config()
const ConnectToDB = require("./config/db.js")
const express = require("express");

const workoutRoutes = require("./routes/workoutRoute")


const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})

ConnectToDB();

app.use("/api/workouts",workoutRoutes)





module.exports = app