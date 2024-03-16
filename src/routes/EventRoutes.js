const express = require('express');
const Event = require('../models/Event'); 
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).send("Error fetching events");
    }
});

module.exports = router;
