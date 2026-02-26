const express = require("express");
const app = express();
const authRouter = require("./routes/auth.route")
const postRouter = require('./routes/post.route')
const userRouter = require('./routes/user.route')
const cookieParser = require('cookie-parser')
app.use(express.json())
const path = require('path')
app.use(express.static('./public'))
app.use(cookieParser())

app.use("/api/v1/auth", authRouter)
app.use("/", postRouter)
app.use("/api/user", userRouter)

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = app;