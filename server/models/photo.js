const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
    photo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'files.files'
    },
    caption: {
        type: String,
        required: false,
    },
    tags: [
        {
            type: String, 
        }
    ],
}, { collection: 'photos',
versionKey: false
})

module.exports = mongoose.model('Photos', photoSchema)