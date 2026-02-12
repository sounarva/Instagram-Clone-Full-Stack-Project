const express = require("express");
const app = express();
const authRouter = require("./routes/auth.route")
const postRouter = require('./routes/post.route')
const cookieParser = require('cookie-parser')
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRouter)
app.use("/", postRouter)

module.exports = app;