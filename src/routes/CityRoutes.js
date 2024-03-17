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

// more event api-endpoints should be added here

module.exports = router;
