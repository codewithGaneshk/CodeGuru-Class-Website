const mongoose = require("mongoose")

const jobsSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    userName:{
        type:mongoose.Schema.ObjectId,
        ref:"codeguruuser",
        required:true
    },
    companyEmail:{
        type:String,
        required:true
    },
    companyNumber:{
        type:Number,
        required:true
    },
    photo:{
        type:String,
    },
    companyAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    websiteLink:{
        type:String,
    },
    description:{
        type:String
    }
},{timestamps:true})

module.exports = mongoose.model("codegurujobs",jobsSchema)
