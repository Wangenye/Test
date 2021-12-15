const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
})


const ForumSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,

    },
    category: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],



}, {
    timestamps: true,
})

const Forum = mongoose.model('Forum', ForumSchema)
module.exports = Forum