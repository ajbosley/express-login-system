const mongoose = require('mongoose');

const post = mongoose.Schema({
    postID: {
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
    comments: {
        type: Array,
        required: true
    },
    followers: {
        type: Array,
        required: true
    },
    linkedEvents: {
        type: Array,
        required: false
    },
    linkedUsers: {
        type: Array,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    spotifyData: {
        type: Object,
        required: false
    },
    googlePhotos: {
        type: Object,
        required: false
    },
    youtubeData: {
        type: Object,
        required: false
    },
    messengerData: {
        type: Object,
        required: false
    },
    reactions: {
        type: Array,
        required: true
    },
    shares: {
        type: Array,
        required: true
    }
})
module.exports = mongoose.model('Post', post);