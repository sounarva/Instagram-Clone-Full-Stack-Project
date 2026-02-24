const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")



async function registerController(req, res) {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
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
    if (user) {
        return res.status(400).json({
            success: false,
            message: "User already exists"
        })
    }
    const hashedPassword = crypto.createHash("md5").update(password).digest("hex")
    const newUser = await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id: newUser._id,
        username: newUser.username
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })

    res.cookie("token", token)
    return res.status(201)
        .json({
            success: true,
            message: "User registered successfully ✅",
            user: {
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
            success: false,
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
            success: false,
            message: "User not found"
        })
    }

    const hashedPassword = crypto.createHash("md5").update(password).digest("hex")
    const isPasswordValid = user.password === hashedPassword
    if (!isPasswordValid) {
        return res.status(401).json({
            success: false,
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
    res.cookie("token", token)

    res.status(200).json({
        success: true,
        message: "User logged in successfully ✅",
        user: {
            username: user.username,
            email: user.email,
            profilePic: user.profilePic,
            bio: user.bio
        }
    })
}

async function getMeController(req, res) {
    try {
        const id = req.userID
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        const user = await userModel.findById(id)
        return res.status(200).json({
            success: true,
            message: "User fetched successfully ✅",
            user: {
                username: user.username,
                email: user.email,
                profilePic: user.profilePic,
                bio: user.bio
            }
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = {
    registerController,
    loginController,
    getMeController
}