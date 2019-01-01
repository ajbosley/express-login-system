const mongoose = require('mongoose');

const month = mongoose.Schema({
    monthID: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: new Date()
    },
    name: {
        type: String,
        required: true
    },
    linkedDays: {
        type: Array,
        required: false
    },
    reactions: {
        type: Array,
        required: true
    },
    comments: {
        type: Array,
        required: true
    },
    shares: {
        type: Array,
        required: true
    }
})
module.exports = mongoose.model('Month', month);