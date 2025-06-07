const Questionbank = require("../Model/questionBank")

exports.getAllQuestionbank = async (req, res) => {
    try {
        const data = await Questionbank.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.getQuestionbank = async (req, res) => {
    try {
        const data = await Questionbank.find(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postQuestionbank = async (req, res) => {
    try {
      const data = await Questionbank.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.putQuestionbank = async (req, res) => {
    try {
        const data = await Questionbank.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteQuestionbank = async (req, res) => {
    try {
        const data = await Questionbank.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}