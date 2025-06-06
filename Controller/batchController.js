const Batch = require("../Model/batch")

exports.getAllBatch = async (req, res) => {
    try {
        const data = await Batch.find().populate("course").populate("students")
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}


exports.getBatch = async (req, res) => {
    try {
        const data = await Batch.find(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postBatch = async (req, res) => {
    try {
      const data = await Batch.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}



exports.putBatch = async (req, res) => {
    try {
        const data = await Batch.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteBatch = async (req, res) => {
    try {
        const data = await Batch.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}