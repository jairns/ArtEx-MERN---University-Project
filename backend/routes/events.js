const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const verify = require('./verifyToken');
const bodyParser = require('body-parser');
const { Mongoose } = require('mongoose');

router.use(bodyParser.json({ type: 'application/*+json' }));

// GETTING ALL THE EVENTS
router.get('/', async (req,res) => {
    try {
        const events = await Event.find().populate('venue');
        res.json(events);
    } catch(err) {
        res.json({
            message: err
        });
    }
});

// CREATE NEW EVENT
router.post('/', verify, async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const event = new Event({
        title: req.body.title,
        city: req.body.city,
        presenters_name: req.body.presentersName,
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        venue: req.body.venue,
        image: req.body.image
    });

    try {
        const savedEvent = await event.save();
        res.json(savedEvent)
    } catch(err) {
        res.json({
            message: err
        });
    }
});

// GET SPECIFIC EVENT
router.get('/:eventId', async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId).populate('venue');;
        res.json(event);
    } catch(err) {
        res.json({
            message: err
        });
    }
});

// DELETING AN EVENT
router.delete('/:eventId', verify, async (req, res) => {
    try {
        const removedEvent = await Event.remove({_id: req.params.eventId});
        res.json(removedEvent);
    }catch(err) {
        res.json({
            message: err
        });
    }
});

// EDITING AN EVENT
router.patch('/:eventId', verify, async (req, res) => {
    try {
        const updatedEvent = await Event.updateOne({_id: req.params.eventId}, { $set: 
            { 
                title: req.body.title,
                city: req.body.city,
                presenters_name: req.body.presentersName,
                date: req.body.date,
                time: req.body.time,
                description: req.body.description,
                venue: req.body.venue,
                image: req.body.image
            } 
        });
        res.json(updatedEvent);
    }catch(err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;