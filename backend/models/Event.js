const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    presenters_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    venue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Venue',
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Event', EventSchema);