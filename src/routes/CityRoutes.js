const express = require('express');
const City = require('../models/City'); 
const router = express.Router();

//api endpoint that gets all cities
router.get('/', async (req, res) => {
    try {
        const cities = await City.find();
        res.json(cities);
    } catch (error) {
        res.status(500).send("Error fetching cities");
    }
});

// get a specific city events
router.get('/:cityId/events', async (req, res) => {
    try {
        const cityId = req.params.cityId;
        const cityEvents = await City.findById(cityId).populate('events');
        if (!cityEvents) {
            return res.status(404).send('City not found');
        }
        console.log("City with Events:", cityEvents);
        res.json(cityEvents);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching city events');
    }
})
module.exports = router;
