const route = require("express").Router()
const {getAllUser,getUser,postUser,putUser,deleteUser, login} = require('../Controller/userController');

route.get('/',getAllUser)
route.get("/:id",getUser)
route.post('/',postUser)
route.post("/login",login)
route.put('/:id',putUser)
route.delete('/:id',deleteUser)

module.exports = route


