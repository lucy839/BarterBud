const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define uploadSchema
const uploadSchema = new Schema({
    user: String,
    productname: String,
    condition: String,
    description: String,
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    status: String
})


const Upload = mongoose.model('Upload', uploadSchema)
module.exports = Upload