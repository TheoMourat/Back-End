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
// Endpoint to get events by City ID
router.get('/eventsByCityId/:cityId', async (req, res) => {
    try {
        const cityId = req.params.cityId;
        const cityEvents = await Event.find({ city: cityId });
        if (!cityEvents) {
            return res.status(404).send("Events for this cityId not found");
        }
        res.json(cityEvents);
    } catch (error) {
        res.status(500).send("Error fetching events");
    }
});
// Endpoint to get events based on category and city 
router.get('/:cityId/:category', async (req, res) => {
    const { cityId, category } = req.params;

    try {
        const events = await Event.find({
            city: cityId,
            category: category
        });

        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
