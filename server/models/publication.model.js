const mongoose = require("mongoose")
const Schema = mongoose.Schema


const PublicationSchema = new Schema({
    material:{type: String, required: true, max: 100},
    // prodImage:{
    //     data:{type: Buffer, required: true},
    //     contentType:{type: String, required: true}
    // },
    quantity:{type: String, required: true, max: 100},
    frecuency:{type: String, required: true, max: 100},
    address:{type: String, required: true, max: 100},
    city:{type: String, required: true, max: 100},
    department:{type: String, required: true, max: 100},
    description:{type: String, required: true, max: 512},
});

module.exports = mongoose.model("publications", PublicationSchema);