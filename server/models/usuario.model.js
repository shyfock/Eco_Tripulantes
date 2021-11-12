const mongoose = require("mongoose")
const Schema = mongoose.Schema


const UserSchema = new Schema({
    username:{type: String, required: true, max: 100},
    email:{type: String, required: true, max: 100},
    password:{type: String, required: true, max: 128}
})

module.exports = mongoose.model("users", UserSchema)