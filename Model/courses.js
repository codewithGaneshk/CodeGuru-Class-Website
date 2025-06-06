const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true
    }
   
}, {timestamps:true})

module.exports = mongoose.model("codeguruCourse",courseSchema)