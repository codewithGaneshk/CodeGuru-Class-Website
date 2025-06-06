const jwt = require("jsonwebtoken")
const auth = async (req,res,next) => {
    try {
        const token = req.header("auth-token")
        const veryfyToken = await jwt.verify(token,process.env.SEC)
        if(!veryfyToken) return res.status(500).json({errors:true,message:"Token Is Invalid"})
            next()
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
module.exports = auth