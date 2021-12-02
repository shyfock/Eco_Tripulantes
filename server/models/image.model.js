const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    caption:{type: String, required: true, max: 100},
    filename:{type: String, required: true, max: 100},
    fileId:{type: String, required: true, max: 100},
    createdAt:{type: Date, default: Date.now()}
})

module.exports = mongoose.model("upload", ImageSchema);