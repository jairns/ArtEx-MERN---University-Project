const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');
const bodyParser = require('body-parser');
const { Mongoose } = require('mongoose');

router.use(bodyParser.json({ type: 'application/*+json' }));

// Get Berlin Hotels
router.get('/berlin', async (req,res) => {
    try {
        const hotels = await Hotel.find({ location: "Berlin" });
        res.json(hotels);
    } catch(err) {
        res.json({
            message: err
        });
    }
});

// Get Glasgow Hotels
router.get('/glasgow', async (req,res) => {
    try {
        const hotels = await Hotel.find({ location: "Glasgow" });
        res.json(hotels);
    } catch(err) {
        res.json({
            message: err
        });
    }
});

// Get Glasgow Hotels
router.get('/barcelona', async (req,res) => {
    try {
        const hotels = await Hotel.find({ location: "Barcelona" });
        res.json(hotels);
    } catch(err) {
        res.json({
            message: err
        });
    }
});

// CREATE NEW EVENT
router.post('/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const hotel = new Hotel({
        name: req.body.name,
        price: req.body.price,
        distance_from_venue: req.body.distance_from_venue,
        location: req.body.location,
        booking_url: req.body.booking_url,
        image: req.body.image
    });

    try {
        const savedHotel = await hotel.save();
        res.json(savedHotel)
    } catch(err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;