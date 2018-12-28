const mongoose = require('mongoose');

const user = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatarURL: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        required: false
    },
    dob: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    authLevel: {
        type: Number,
        required: false
    },
    phrase: {
        type: String,
        required: false
    },
    units: {
        type: String,
        required: false,
        default: 'Metric'
    }
});

module.exports = mongoose.model('User', user);