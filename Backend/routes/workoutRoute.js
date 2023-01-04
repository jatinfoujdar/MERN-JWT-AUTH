const express = require("express")
const workoutSchema = require("../schema/workSchema")
const router = express.Router()


router.get("/",(req,res)=>{
    res.send("get all workout")
})

router.get("/:id",(req,res)=>{
    req.send("get single workout")
})

router.post("/", async (req,res)=>{
    const {title , load,reps} = req.body

    try {
        const workout = await workoutSchema.create({title , load,reps})
    res.status(200).json(workout)
    } catch (error) {
       res.send(400).json({error:error.message})
    }
})

router.delete("/:id",(req,res)=>{
    res.send("delete a  workout")
})

router.patch("/:id",(req,res)=>{
    res.send("update a workout")
})


module.exports = router;