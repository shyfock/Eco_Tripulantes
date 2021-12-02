const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema ({
    msg:{type: String, required: true, max: 500},
    date:{type: String, required: true, max: 100},
    sender:[{type: Schema.Types.ObjectId, ref: 'user'}],
    receiver:[{type: Schema.Types.ObjectId, ref: 'user'}]
});

module.exports = mongoose.model("chat", ChatSchema);