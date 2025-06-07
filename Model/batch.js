const mongoose = require("mongoose")

const batchSchema = new mongoose.Schema({
    batchName:{
      type:String,
      required:true

    },
    course:{
      type:mongoose.Schema.ObjectId,
      ref:"codeguruCourse"
    },
    students:{
      type:mongoose.Schema.ObjectId,
      ref:"codeguruuser"
    },
    capacity:{
      type:Number
    },
    startDate:{
      type:Date,
      required:true
    },
    endDate:{
      type:Date
    },
    time:{
      type:String
    },
    isActive:{
      type:Boolean,
      required:true
    }

},{timestamps:true})
module.exports = mongoose.model("codeguruBatches",batchSchema)