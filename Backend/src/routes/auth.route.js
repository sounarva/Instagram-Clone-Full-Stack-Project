const express = require("express")
const router = express.Router()
const { registerController, loginController, getMeController, logoutController } = require("../controllers/auth.controller")
const authMiddleware = require('../middlewares/auth.middleware')


router.post("/register", registerController)
router.post("/login", loginController)
router.post("/logout", logoutController)
router.get("/get-me", authMiddleware, getMeController)

module.exports = router