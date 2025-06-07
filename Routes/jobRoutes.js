const {getAllJobs,getJobs,postJobs,putJobs,deleteJobs} = require("../Controller/jobsController")
const route = require("express").Router()

route.get("/",getAllJobs)
route.get("/:id",getJobs)
route.post("/",postJobs)
route.put("/:id",putJobs)
route.delete("/:id",deleteJobs)

module.exports = route