const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    emailId:{type:String, required:true},
    password:{type:String, required:true},
    phoneN:{type:String, required:true}
},
{timestamps:true}
);

/// creating model or collection
const User = new mongoose.model("User", userSchema);
module.exports = User;