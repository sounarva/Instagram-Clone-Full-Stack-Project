const jwt = require('jsonwebtoken')

function authMiddleware(req , res , next){
    const token = req.cookies.token
    if(!token){
        return res.status(401)
        .json({
            message:"Unauthorized user"
        })
    }

    let decoded = null
    try {
        decoded = jwt.verify(token , process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401)
        .json({
            message:"Token corrupted ❌😵 Try to login first"
        })
    }

    req.userID = decoded.id
    next()
}

module.exports = authMiddleware