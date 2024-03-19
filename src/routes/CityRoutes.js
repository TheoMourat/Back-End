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
        res.status(500).send('Error fetching city events');
    }
})


//search for a city
router.get('/search', async (req, res) => {
    const search = req.query.query;
    try {
        const matchingCities = await City.find({title: {$regex:search, $options:'i'}});
        res.json(matchingCities);
        if (!matchingCities) {
            return res.status(404).send('City not found');
        }
    } catch (error) {
        res.status(500).send('Error querying city');
    }
});


module.exports = router;
