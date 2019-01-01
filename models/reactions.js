const mongoose = require('mongoose');

const reaction = mongoose.Schema({
    commentID: {
        type: String,
        required: false
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
    reactionType: {
        type: String,
        required: true
    },
    reactionIcon: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Reaction', reaction);