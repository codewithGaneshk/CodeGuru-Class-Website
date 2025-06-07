const {getAllQuestionbank,getQuestionbank,postQuestionbank,putQuestionbank,deleteQuestionbank} = require("../Controller/questionbankController")
const route = require("express").Router()

route.get("/",getAllQuestionbank)
route.get("/:id",getQuestionbank)
route.post("/",postQuestionbank)
route.put("/:id",putQuestionbank)
route.delete("/:id",deleteQuestionbank)

module.exports = route

