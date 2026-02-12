const ImageKit = require("@imagekit/nodejs");
const { toFile } = require('@imagekit/nodejs');
const postModel = require('../models/post.model')
const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function createPost(req, res) {
    try {
        const id = req.userID
        const caption = req.body.caption

        // Uploading file to ImageKit
        const response = await imagekit.files.upload({
            file: await toFile(Buffer.from(req.file.buffer), 'file'),
            fileName: req.file.originalname,
            folder: "InstaClone/Posts"
        });

        // Compressing image using ImageKit
        const transformedUrl = imagekit.helper.buildSrc({
            urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
            src: response.url,
            transformation: [
                {
                    quality: 60,
                    format: 'webp',
                },
            ],
        });

        const post = await postModel.create({
            userId: id,
            image: transformedUrl,
            caption
        })

        return res.status(200)
            .json({
                message: "Post created sucessfully ✅",
                post_data: post
            })
    } catch (err) {
        return res.status(500)
            .json({
                message: err.message
            })
    }
}

module.exports = { createPost }