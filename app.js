const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require ("dotenv/config")

const userRoute = require("./Routes/userRoute")
const courseRoute = require("./Routes/courseseRoute")
const feedbackRoute = require("./Routes/feedbackRoutes")
const batchRoute = require("./Routes/batchroute")
const questionbankRoute = require("./Routes/questionbankRoute")
const jobsRoute = require("./Routes/jobRoutes")
const app = express()


app.get("/",(req,res)=>{
    res.send("Welcome To CodeGuru")
})

app.use(express.json())
app.use(cors())
app.use("/api/user",userRoute)
app.use("/api/course",courseRoute)
app.use("/api/feedback",feedbackRoute)
app.use("/api/batch",batchRoute)
app.use("/api/questionbank",questionbankRoute)
app.use("/api/jobs",jobsRoute)

app.listen(process.env.PORT)

async function db() {
    try {
        const data = await mongoose.connect(process.env.DB)
        console.log(data.default.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
        
    }
}
db()