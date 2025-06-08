const route = require("express").Router()
const {getAllCourse,getCourse,postCourse,putCourse,deleteCourse} = require('../Controller/couresesController');
const isAdmin = require("../middlewair/admin");
const auth = require("../middlewair/auth");

route.get('/',getAllCourse)
route.get('/:id',getCourse)
route.post('/',postCourse)
route.put('/:id',putCourse)
route.delete('/:id',deleteCourse)

module.exports = route


