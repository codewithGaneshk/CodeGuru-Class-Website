const jwt = require("jsonwebtoken")

const isAdmin = async (req,res,next) => {
    try {
        const token = req.header("auth-token")
        const user = await jwt.decode(token)
        console.log(user);
        if(user.role != "admin") return res.status(500).json({errors:true,message:"Not Authrized"})
         next()
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
module.exports = isAdmin