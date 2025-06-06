const Course = require("../Model/courses")

exports.getAllCourse = async (req, res) => {
    try {
        const data = await Course.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}


exports.getCourse = async (req, res) => {
    try {
        const data = await Course.find(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postCourse = async (req, res) => {
    try {
      const data = await Course.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}



exports.putCourse = async (req, res) => {
    try {
        const data = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteCourse = async (req, res) => {
    try {
        const data = await Course.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}