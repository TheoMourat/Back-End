const express = require('express');
const City = require('../models/City');
const router = express.Router();

// //api endpoint that gets all cities
router.get('/', async (req, res) => {
    try {
        const cities = await City.find();
        res.json(cities);
    } catch (error) {
        res.status(500).send("Error fetching cities");
    }
});

//api endpoint that gets one city
router.get('/:id', async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        if (!city) {
            return res.status(404).send("City not found");
        }
        res.json(city);
    } catch (error) {
        res.status(500).send("Error fetching city");
    }
});

//api endpoint that gets all events on a given city
router.get('/:cityId/events', async (req, res) => {
    try {
        // Find the city by its ID
        const city = await City.findById(req.params.cityId);

        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }

        // Find all events in the city using the events field
        const events = await Event.find({ city: city._id });

        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// more event api-endpoints should be added here

module.exports = router;
