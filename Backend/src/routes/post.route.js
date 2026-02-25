const express = require("express")
const postRouter = express.Router()
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })

const { createPostController, getPostDetailsController, getParticularPostController, postLikeController, getFeedController, postUnlikeController, deletePostController } = require('../controllers/post.controller')
const authMiddleware = require('../middlewares/auth.middleware')


postRouter.post("/api/posts", authMiddleware, upload.single("image"), createPostController)
postRouter.delete("/api/posts/delete/:postID", authMiddleware, deletePostController)
postRouter.get("/api/posts", authMiddleware, getPostDetailsController)
postRouter.get("/api/posts/feed", authMiddleware, getFeedController)
postRouter.get("/api/posts/:postID", authMiddleware, getParticularPostController)
postRouter.post("/api/posts/like/:postID", authMiddleware, postLikeController)
postRouter.delete("/api/posts/unlike/:postID", authMiddleware, postUnlikeController)

module.exports = postRouter