const workoutSchema = require("../schema/workSchema")

//get all workout
const getWorkouts = async(req,res)=>{
    const workouts = await workoutSchema.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async(req,res)=>{
    const {id} = req.params

    const workout = await workoutSchema.findById(id)

    if(!workout){
        return res.status(404).json({error:"no such id"})
    }
    res.status(200).json(workout)

}

// create a new workout
const createWorkout = async(req,res)=>{
    const {title, load, reps} = req.body

    try {
        const workout = await workoutSchema.create({title , load, reps})
    res.status(200).json(workout)
    } catch (error) {
       res.send(400).json({error:error.message})
    }
}


//delete a workout







module.exports ={
    getWorkout,
    getWorkouts,
     createWorkout 
}

