const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")



async function registerController(req, res) {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const user = await userModel.findOne({
        $or: [
            {
                username
            },
            {
                email
            }
        ]
    })
    if (user) {
        return res.status(400).json({ message: "User already exists" })
    }
    const hashedPassword = crypto.createHash("md5").update(password).digest("hex")
    const newUser = await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id: newUser._id
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })

    res.cookie("token", token)
    return res.status(201)
        .json({
            message: "User registered successfully",
            userDetails: {
                username: newUser.username,
                email: newUser.email,
                profilePic: newUser.profilePic,
                bio: newUser.bio
            }
        })
}

async function loginController(req, res) {
    const { username, email, password } = req.body
    
    if (!password) {
        return res.status(400).json({
            message: "Password is required"
        })
    }
    const user = await userModel.findOne({
        $or: [
            {
                username
            },
            {
                email
            }
        ]
    })
    if (!user) {
        return res.status(400).json({
            message: "User not found"
        })
    }

    const hashedPassword = crypto.createHash("md5").update(password).digest("hex")
    const isPasswordValid = user.password === hashedPassword
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully✅"
    })
}

module.exports = {
    registerController,
    loginController
}