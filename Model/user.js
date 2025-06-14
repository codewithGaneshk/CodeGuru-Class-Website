const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobNo:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isPlaced:{
        type:Boolean,
        default:false
    }
    
}, {timestamps:true})

module.exports = mongoose.model("codeguruuser",userSchema)