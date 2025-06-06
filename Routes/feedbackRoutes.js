const {getFeedback,postFeedback,putFeedback,deleteFeedback} = require("../Controller/feedbackcontroller")
const route = require("express").Router()

route.get("/",getFeedback)
route.post("/",postFeedback)
route.put("/:id",putFeedback)
route.delete("/:id",deleteFeedback)

module.exports = route