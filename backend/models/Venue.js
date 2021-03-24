const mongoose = require('mongoose');

const VenueSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    closest_station: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Venue', VenueSchema);