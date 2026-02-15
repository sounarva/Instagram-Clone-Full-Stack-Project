const express = require("express")
const postRouter = express.Router()
const { createPostController, getPostDetailsController } = require('../controllers/post.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })

postRouter.post("/api/posts", authMiddleware, upload.single("image"), createPostController)
postRouter.get("/api/posts", authMiddleware, getPostDetailsController)

module.exports = postRouter