const followModel = require('../models/follow.model')
const userModel = require('../models/user.model')

async function followController(req, res) {
    const follower = req.userName
    const followee = req.params.username

    if (follower === followee) {
        return res.status(400).json({
            message: "You can't follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username: followee
    })
    if (!isFolloweeExists) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    const isFolloweeAlreadyFollowed = await followModel.findOne({
        followee,
        follower
    })
    if (isFolloweeAlreadyFollowed && isFolloweeAlreadyFollowed.status === "Accepted") {
        return res.status(404).json({
            message: "User already followed 🤨"
        })
    }
    if (isFolloweeAlreadyFollowed && isFolloweeAlreadyFollowed.status === "Pending") {
        return res.status(404).json({
            message: "Follow request is already pending 🤨"
        })
    }
    if (isFolloweeAlreadyFollowed && isFolloweeAlreadyFollowed.status === "Rejected") {
        const follow = await followModel.findByIdAndUpdate(isFolloweeAlreadyFollowed._id, {
            status: "Pending"
        }, { new: true })
        return res.status(200).json({
            message: `${follower} follow request again sent to ${followee} successfully`,
            followDets: follow
        })
    }

    const follow = await followModel.create({
        followee,
        follower
    })

    return res.status(201).json({
        message: `${follower} follow request sent to ${followee} successfully✅`,
        followDets: follow
    })
}

async function unfollowController(req, res) {
    const followee = req.params.username
    const follower = req.userName

    if (follower === followee) {
        return res.status(400)
            .json({
                message: "You cannot unfollow yourself"
            })
    }

    const isFolloweeExists = await userModel.findOne({
        username: followee
    })
    if (!isFolloweeExists) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    const isFollowing = await followModel.findOne({
        followee,
        follower,
        status: "Accepted"
    })

    if (!isFollowing) {
        return res.status(400)
            .json({
                message: "You're not following this user or follow request is pending or rejected 🤨"
            })
    }

    const unfollowUser = await followModel.findByIdAndDelete(isFollowing._id, { new: true })
    return res.status(200)
        .json({
            message: `${follower} unfollowed ${followee} successfully`,
            unfollowDets: unfollowUser
        })

}

async function acceptFollowRequestController(req, res) {
    const follower = req.userName
    const followee = req.params.username

    if (follower === followee) {
        return res.status(400)
            .json({
                message: "Bad Request"
            })
    }
    const isFollowRequest = await followModel.findOne({
        follower: followee,
        followee: follower,
        status: "Pending"
    })
    if (!isFollowRequest) {
        return res.status(404).json({
            message: "No follow request found or follow request is already accepted or rejected 🤨"
        })
    }

    const acceptRequest = await followModel.findByIdAndUpdate(isFollowRequest._id, {
        status: "Accepted"
    }, { new: true })
    return res.status(200).json({
        message: `${follower} accepted ${followee}'s follow request successfully✅`,
        followDets: acceptRequest
    })
}

async function rejectFollowRequestController(req, res) {
    const follower = req.userName
    const followee = req.params.username

    if (follower === followee) {
        return res.status(400)
            .json({
                message: "Bad Request"
            })
    }
    const isFollowRequest = await followModel.findOne({
        follower: followee,
        followee: follower,
        status: "Pending"
    })
    if (!isFollowRequest) {
        return res.status(404).json({
            message: "No follow request found or follow request is already accepted or rejected 🤨"
        })
    }

    const rejectRequest = await followModel.findByIdAndUpdate(isFollowRequest._id, {
        status: "Rejected"
    }, { new: true })
    return res.status(200).json({
        message: `${follower} rejected ${followee}'s follow request successfully ❌`,
        followDets: rejectRequest
    })
}

module.exports = {
    followController,
    unfollowController,
    acceptFollowRequestController,
    rejectFollowRequestController
}