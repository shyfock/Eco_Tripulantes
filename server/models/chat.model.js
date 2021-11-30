const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema ({
    sender:{type: String, required: true, max: 100},
    receiver:{type: String, required: true, max: 100},
    msg:{type: String, required: true, max: 500},
    date:{type: String, required: true, max: 100}
});

module.exports = mongoose.model("chat", ChatSchema);