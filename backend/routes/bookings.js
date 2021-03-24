const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const bodyParser = require('body-parser');
const { Mongoose } = require('mongoose');

router.use(bodyParser.json({ type: 'application/*+json' }));

// CREATE NEW EVENT
router.post('/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const booking = new Booking({
        name: req.body.name,
        email: req.body.email,
        event: req.body.event_id
    });

    try {
        const savedBooking = await booking.save();
        res.json(savedBooking).populate('event')
    } catch(err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;