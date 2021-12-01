const mongoose = require("mongoose");
const Schema = new mongoose.Schema;

const ProfileSchema = new Schema ({
    name:{type: String, required: true, max: 100},
    lastname:{type: String, required: true, max: 100},
    phonenumber:{type: String, required: true, max: 100},
    address:{type: String, required: true, max: 100},
    city:{type: String, required: true, max: 100},
    dept:{type: String, required: true, max: 100},
    profession:{type: String, required: true, max: 100},
    info:{type: String, required: true, max: 500},
})

module.exports = mongoose.model("profile", ProfileSchema);