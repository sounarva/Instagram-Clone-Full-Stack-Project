const express = require("express")
const postRouter = express.Router()
const { createPostController } = require('../controllers/post.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })

postRouter.post("/api/posts", authMiddleware, upload.single("image"), createPostController)

module.exports = postRouter