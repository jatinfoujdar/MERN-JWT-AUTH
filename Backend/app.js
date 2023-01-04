const express = require("express");


const app = express();
const workoutRoutes = require("./routes/workoutRoute")

app.use(express.json())


app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})


app.use("/api/workouts",workoutRoutes)





module.exports = app