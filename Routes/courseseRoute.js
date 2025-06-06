const route = require("express").Router()
const {getCourse,postCourse,putCourse,deleteCourse} = require('../Controller/couresesController');
const isAdmin = require("../middlewair/admin");
const auth = require("../middlewair/auth");

route.get('/',getCourse)
route.post('/',[isAdmin,auth],postCourse)
route.put('/:id',[isAdmin,auth],putCourse)
route.delete('/:id',[isAdmin,auth],deleteCourse)

module.exports = route


