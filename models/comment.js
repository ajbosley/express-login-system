const mongoose = require('mongoose');

const comment = mongoose.Schema({
    commentID: {
        type: String,
        required: true
    },
    replyID: {
        type: String,
        required: false
    },
    userID: {
        type: String,
        required: true
    },
    postID: {
        type: String,
        required: false
    },
    eventID: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        required: true,
        default: new Date()
    },
    replies: {
        type: Array,
        required: true
    },
    reactions: {
        type: Array,
        required: true
    }
})
module.exports = mongoose.model('Comment', comment);