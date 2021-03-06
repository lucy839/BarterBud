const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define uploadSchema
const uploadSchema = new Schema({
    Timestamp: {
        type: Date,
        default: Date.now
    },
    user: String,
    productname: String,
    condition: String,
    description: String,
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    status: String,
    requestFrom: String,
    image: String
});

const Upload = mongoose.model('Upload', uploadSchema)
module.exports = Upload