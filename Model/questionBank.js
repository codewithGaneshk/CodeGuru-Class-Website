const mongoose = require("mongoose")

const questionBankSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ans:{
        type:String,
        required:true
    },
    catagory:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("codeGuruquestionBank",questionBankSchema)