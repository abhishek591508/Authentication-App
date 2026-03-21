const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["Admin", "Student", "Visitor"]//enum : sirf yahi 3 value le sakta hai, uske alava koi aur nahi le sakta hai
    }
})

module.exports = mongoose.model("user", userSchema);