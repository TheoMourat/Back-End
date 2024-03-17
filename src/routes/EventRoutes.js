const express = require('express');
const Event = require('../models/Event'); 
const router = express.Router();

//api endpoint that shows all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).send("Error fetching events");
    }
});

// more event api-endpoints should be added here

module.exports = router;
