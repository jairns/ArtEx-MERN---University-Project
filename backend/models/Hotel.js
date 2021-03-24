const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String, 
        required: true,
    },
    distance_from_venue: {
        type: String, 
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    booking_url: {
        type: String, 
        required: true,
    },
    image: {
        type: String, 
        required: true,
    },
});

module.exports = mongoose.model('Hotel', hotelSchema);