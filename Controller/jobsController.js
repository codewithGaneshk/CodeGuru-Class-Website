const Jobs = require("../Model/jobs")

exports.getAllJobs = async (req, res) => {
    try {
        const data = await Jobs.find().populate("userName")
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}


exports.getJobs = async (req, res) => {
    try {
        const data = await Jobs.find(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postJobs = async (req, res) => {
    try {
      const data = await Jobs.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}



exports.putJobs = async (req, res) => {
    try {
        const data = await Jobs.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteJobs = async (req, res) => {
    try {
        const data = await Jobs.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}