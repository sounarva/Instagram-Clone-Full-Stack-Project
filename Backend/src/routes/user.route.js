const express = require("express")
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')
const { followController, unfollowController, acceptFollowRequestController, rejectFollowRequestController } = require('../controllers/user.controller')

// POST /api/user/follow/:username
router.post("/follow/:username", authMiddleware, followController)

// POST /api/user/unfollow/:username
router.post("/unfollow/:username", authMiddleware, unfollowController)

// POST /api/user/accept/:username
router.post("/accept/:username" , authMiddleware , acceptFollowRequestController)

// POST /api/user/reject/:username
router.post("/reject/:username" , authMiddleware , rejectFollowRequestController)



module.exports = router