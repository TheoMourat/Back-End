const express = require('express');
const City = require('../models/City'); 
const router = express.Router();

// Get all cities
router.get('/', async (req, res) => {
    try {
        const cities = await City.find();
        res.json(cities);
    } catch (error) {
        res.status(500).send("Error fetching cities");
    }
});

// ...other routes for cities

module.exports = router;
