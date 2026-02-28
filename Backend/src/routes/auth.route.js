const express = require("express")
const router = express.Router()
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
const { registerController, loginController, getMeController, logoutController, profilePicController } = require("../controllers/auth.controller")
const authMiddleware = require('../middlewares/auth.middleware')


router.post("/register", registerController)
router.post("/login", loginController)
router.post("/logout", logoutController)
router.get("/get-me", authMiddleware, getMeController)
router.patch("/profilepic", authMiddleware, upload.single("profilePic"), profilePicController)

module.exports = router