const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    }
});

module.exports = mongoose.model('Booking', bookingSchema);