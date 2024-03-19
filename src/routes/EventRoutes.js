const express = require('express');
const Event = require('../models/Event'); 
const router = express.Router();

//api endpoint that gets all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).send("Error fetching events");
    }
});

// get event by Id
router.get('/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).send("Event not found");
        }
        res.json(event);
    } catch (error) {
        res.status(500).send("Error fetching event")
    }
});

module.exports = router;
