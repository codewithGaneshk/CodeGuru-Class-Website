const {getAllFeedback,getFeedback,postFeedback,putFeedback,deleteFeedback} = require("../Controller/feedbackcontroller")
const route = require("express").Router()

route.get("/",getAllFeedback)
route.get("/:id",getFeedback)
route.post("/",postFeedback)
route.put("/:id",putFeedback)
route.delete("/:id",deleteFeedback)

module.exports = route