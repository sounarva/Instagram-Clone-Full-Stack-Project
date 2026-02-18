const ImageKit = require("@imagekit/nodejs")
const { toFile } = require('@imagekit/nodejs')
const postModel = require('../models/post.model')
const likeModel = require('../models/like.model')

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function createPostController(req, res) {
    let uplaodImageID = null
    try {
        const id = req.userID
        const caption = req.body.caption

        if (!req.file) {
            return res.status(400)
                .json({
                    message: "No file uploaded"
                })
        }

        // Uploading file to ImageKit
        const response = await imagekit.files.upload({
            file: await toFile(Buffer.from(req.file.buffer), 'file'),
            fileName: Date.now() + "-" + req.file.originalname,
            folder: `InstaClone/Posts/${id}`
        });

        uplaodImageID = response.fileId

        const post = await postModel.create({
            userId: id,
            image: {
                filePath: response.filePath,
                fileId: response.fileId
            },
            caption
        })

        return res.status(201)
            .json({
                message: "Post created sucessfully ✅",
                post_data: post
            })
    } catch (err) {
        if (uplaodImageID) {
            try {
                await imagekit.files.delete(uplaodImageID)
            } catch (cleanupErr) {
                console.error("Cleanup failed:", cleanupErr)
            }
        }
        return res.status(500)
            .json({
                message: err.message
            })
    }
}

async function getPostDetailsController(req, res) {
    const userId = req.userID
    const posts = await postModel.find({ userId })
    if (posts.length === 0) {
        return res.status(200)
            .json({
                message: "User has not created any posts yet",
                posts
            })
    }
    return res.status(200)
        .json({
            message: "Posts fetched successfully ✅",
            posts
        })
}

async function getParticularPostController(req, res) {
    const userId = req.userID
    const postId = req.params.postID
    const post = await postModel.findById(postId)

    if (!post) {
        return res.status(404)
            .json({
                message: "Post doesn't exists"
            })
    }

    const isValidUser = post.userId.toString() === userId
    if (!isValidUser) {
        return res.status(403)
            .json({
                message: "Forbidden Content 🤨"
            })
    }

    return res.status(200)
        .json({
            message: "Fetched Successful ✅",
            post
        })
}

async function postLikeController(req, res) {
    try {
        const username = req.userName
        const postId = req.params.postID

        const post = await postModel.findById(postId)
        if (!post) {
            return res.status(404)
                .json({
                    message: "Post doesn't exists"
                })
        }

        const isLiked = await likeModel.findOne({ postid: postId, likedBy: username })
        if (isLiked) {
            return res.status(400)
                .json({
                    message: "Post already liked"
                })
        }

        const like = await likeModel.create({
            postid: postId,
            likedBy: username
        })

        return res.status(201)
            .json({
                message: `${username} liked the post ✅`,
                likeDetails: like
            })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

module.exports = { createPostController, getPostDetailsController, getParticularPostController, postLikeController }