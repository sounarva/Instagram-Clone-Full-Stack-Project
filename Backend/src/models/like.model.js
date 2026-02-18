const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    postid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: [true, "PostID is required"]
    },
    likedBy: {
        type: String,
        required: [true, "User ID is required"]
    }
}, {
    timestamps: true
})

likeSchema.index({ postid: 1, likedBy: 1 }, { unique: true })
const likeModel = mongoose.model("Like", likeSchema)
module.exports = likeModel