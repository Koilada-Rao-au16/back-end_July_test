const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    rollNumber: {
        type: String,
        required: true
    },
    standard: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        line1 : String,
        line2 : String,
        city: String,
        state: String,
        country: String
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'parent'
    }
    
})


const StudentModel = mongoose.model('student', StudentSchema)

module.exports = StudentModel