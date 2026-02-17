const mongoose = require('mongoose')
const followSchema = new mongoose.Schema({
    followee: {
        type: String,
        required: [true, "FolloweeID is required"]
    },
    follower: {
        type: String,
        required: [true, "FollowerID is required"]
    },
    status: {
        type: String,
        default: "Pending",
        enum: {
            values: ["Pending", "Accepted", "Rejected"],
            message: "Invalid status"
        }
    }
}, { timestamps: true })

followSchema.index({ followee: 1, follower: 1 }, { unique: true })

const followModel = mongoose.model("Follow", followSchema)
module.exports = followModel