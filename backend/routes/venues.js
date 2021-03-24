const express = require('express');
const router = express.Router();
const Venue = require('../models/Venue');
const Event = require('../models/Event');
const bodyParser = require('body-parser');

router.use(bodyParser.json({ type: 'application/*+json' }));

// GETTING ALL THE EVENTS
router.get('/', async (req,res) => {
    try {
        const venues = await Venue.find()
        res.json(venues);
     
    } catch(err) {
        res.json({
            message: err
        });
    }
});

// CREATE NEW EVENT
router.post('/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const venue = new Venue({
        name: req.body.name,
        address: req.body.address,
        closest_station: req.body.station
    });

    try {
        const savedVenue = await venue.save();
        res.json(savedVenue)
    } catch(err) {
        res.json({
            message: err
        });
    }
});

// GET SPECIFIC EVENT
router.get('/:venueId', async (req, res) => {
    try {
        const venue = await Venue.findById(req.params.venueId);
        res.json(venue);
    } catch(err) {
        res.json({
            message: err
        });
    }
});

// DELETING AN EVENT
router.delete('/:venueId', async (req, res) => {
    try {
        const removedVenue = await Venue.remove({_id: req.params.venueId});
        res.json(removedVenue);
    }catch(err) {
        res.json({
            message: err
        });
    }
});

// DELETING AN EVENT
router.patch('/:venueId', async (req, res) => {
    try {
        res.send('working');
        const updatedVenue = await Venue.updateOne({_id: req.params.venueId}, { $set: 
            { 
                name: req.body.name,
                address: req.body.address,
                closest_station: req.body.station
            } 
        });
        res.json(updatedVenue);
    }catch(err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;