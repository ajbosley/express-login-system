const mongoose = require('mongoose');

const day = mongoose.Schema({
    dayID: {
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
    posts: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    linkedPosts: {
        type: Array,
        required: false
    },
    linkedUsers: {
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
module.exports = mongoose.model('Day', day);