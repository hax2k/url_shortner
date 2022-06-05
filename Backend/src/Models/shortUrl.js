const mongoose = require('mongoose');
const shortId = require('shortid');

const shortUrlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortId.generate
    },
    click: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        type: String,
        default: 'admin'
    },
    created_time: {
        type: Date,
        default: Date.now()
    }
});


shortUrlSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

shortUrlSchema.set('toJSON', {
    virtuals: true,
});

exports.shortUrlSchema = mongoose.model('ShortUrl', shortUrlSchema);