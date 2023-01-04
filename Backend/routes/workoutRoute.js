const express = require("express")
const {
    getWorkout,
    getWorkouts,
    createWorkout 
     } = require("../controllers/workoutController")

const router = express.Router()


router.get("/", getWorkouts)

router.get("/:id", getWorkout)

router.post("/", createWorkout )

router.delete("/:id",(req,res)=>{
    res.send("delete a  workout")
})

router.patch("/:id",(req,res)=>{
    res.send("update a workout")
})


module.exports = router;