const express = require("express")

const router = express.Router()


router.get("/",(req,res)=>{
    res.send("get all workout")
})

router.get("/:id",(req,res)=>{
    req.send("get single workout")
})

router.post("/",(req,res)=>{
    res.send("post a new workout")
})

router.delete("/:id",(req,res)=>{
    res.send("delete a  workout")
})

router.patch("/:id",(req,res)=>{
    res.send("update a workout")
})


module.exports = router;