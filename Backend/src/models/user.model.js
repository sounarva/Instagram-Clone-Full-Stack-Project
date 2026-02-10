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
        default:"https://imgs.search.brave.com/XJPE2MO8_KCQWWenaWXLVmV0IdqDVKVaacdUOmVEI64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/OTgzLzkxNC9zbWFs/bC9zaW1wbGUtdXNl/ci1kZWZhdWx0LWlj/b24tZnJlZS1wbmcu/cG5n"
    }
})

const userModel = mongoose.model("User" , userSchema)
module.exports = userModel