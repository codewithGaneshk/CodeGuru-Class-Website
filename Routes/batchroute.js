const {getAllBatch,getBatch,postBatch,putBatch,deleteBatch} = require("../Controller/batchController")
const isAdmin = require("../middlewair/admin")
const auth = require("../middlewair/auth")
const route = require("express").Router()

route.get("/",getAllBatch),
route.get("/:id",getBatch)
route.post("/",postBatch)
route.put("/:id",putBatch)
route.delete("/:id",deleteBatch)

module.exports = route