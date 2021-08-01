const mongoose = require('mongoose')

const ParentSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    student: {
        id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "student"
        }
    }
    
})


const parentModel = mongoose.model('parent', ParentSchema)

module.exports = parentModel