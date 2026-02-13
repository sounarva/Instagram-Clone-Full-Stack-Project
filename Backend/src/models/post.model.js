const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User Id is required"]
    },
    image: {
        filePath: {
            type: String,
            required: [true, 'FilePath is required']
        },
        fileId: {
            type: String,
            required: [true, 'FileId is required']
        }
    },
    caption: {
        type: String,
        default: ""
    }
})

const postModel = mongoose.model("Post", postSchema)
module.exports = postModel