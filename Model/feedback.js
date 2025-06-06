const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
    userName:{
        type:mongoose.Schema.ObjectId,
        ref:"codeguruuser",
        required:true
    },
    course:{
        type:mongoose.Schema.ObjectId,
        ref:"codeguruCourse",
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5,
    },
    message:{
        type:String,
        required:true
    }
   

},{timestamps:true})
module.exports = mongoose.model("CodeguruFeedback",feedbackSchema)