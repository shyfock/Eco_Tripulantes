const mongoose = require("mongoose")
const Schema = mongoose.Schema


const PublicationSchema = new Schema({
    materialType:{type: String, required: true, max: 100},
    prodImage:{data: Buffer, contentType: String},
    quantity:{type: String, required: true, max: 100},
    frecuency:{type: String, required: true, max: 100},
    address:{type: String, required: true, max: 100},
    city:{type: String, required: true, max: 100},
    department:{type: String, required: true, max: 100},
    description:{type: String, required: true, max: 512},
})

module.exports = mongoose.model("publications", PublicationSchema)