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
        required: false,
        default: new Date()
    },
    dob: {
        type: Date,
        required: true
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
    },
    posts:{
        type: Array,
        required: true
    },
    emailVerified:{
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('User', user);