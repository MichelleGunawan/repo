const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
    photo: {
        type: String, //TODO: Jason implement photo blob/GridFS
        required: false,
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
}, { collection: 'userHistory',
versionKey: false
})

module.exports = mongoose.model('Photos', photoSchema)