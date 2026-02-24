const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:[true,"Username already exists"]
    },
    email:{
        type:String,
        required:[true , "Email is required"],
        unique:[true , "Email already exists"],
        validate:{
            validator:function(v){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            },
            message:"Please enter a valid email"
        }
    },
    password:{
        type:String,
        required:[true , "Password is required"]
    },
    bio:{
        type:String,
        default:"Hello Guys I am using Insta-Clone 😋😎"
    },
    profilePic:{
        type:String,
        default:"https://imgs.search.brave.com/gM0DGt0wClo49xa3sWIKsCDME15MErrjPVArXfZ815U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/MzU0Lzg1Mi9zbWFs/bC9tYWxlLXBvcnRy/YWl0LXBlb3BsZS1w/cm9maWxlLXBlcmZl/Y3QtZm9yLXNvY2lh/bC1tZWRpYS1hbmQt/YnVzaW5lc3MtcHJl/c2VudGF0aW9ucy11/c2VyLWludGVyZmFj/ZS11eC1ncmFwaGlj/LWFuZC13ZWItZGVz/aWduLWFwcGxpY2F0/aW9ucy1hbmQtaW50/ZXJmYWNlcy1pbGx1/c3RyYXRpb24tdmVj/dG9yLmpwZw"
    }
})

const userModel = mongoose.model("User" , userSchema)
module.exports = userModel