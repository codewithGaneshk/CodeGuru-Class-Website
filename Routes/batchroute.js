const {getAllBatch,getBatch,postBatch,putBatch,deleteBatch} = require("../Controller/batchController")
const isAdmin = require("../middlewair/admin")
const auth = require("../middlewair/auth")
const route = require("express").Router()

route.get("/",getAllBatch),
route.get("/:id",getBatch)
route.post("/",[isAdmin,auth],postBatch)
route.put("/:id",[isAdmin,auth],putBatch)
route.delete("/:id",[isAdmin,auth],deleteBatch)

module.exports = route