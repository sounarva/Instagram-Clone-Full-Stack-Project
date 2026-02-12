const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User Id is required"]
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    caption: {
        type: String,
        default: ""
    }
})

const postModel = mongoose.model("Post", postSchema)
module.exports = postModel