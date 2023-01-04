const mongoose = require("mongoose")
const ConnectToDB = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
     console.log(`conneted to db ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit(1)
    })
}

module.exports = ConnectToDB;