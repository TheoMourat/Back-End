require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const City = require('./models/Cities');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);
const connectDB = async()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

app.get('/', (req, res) => {
    res.send({title: 'Events'});
});


app.get('/add-city', async (req, res) => {
    try {
        await City.insertMany([
            {
                title: "Athens",
            },
            {
                title: "Thessaloniki",
            },
            {
                title: "Corfu"
            },
            {
                title: "Serres"
            }
            
        ]);
        res.send("Cities Added");
    } catch (error) {
        console.log("error", + error);
    }
});

app.get('/cities', async (req, res) => {
    const city = await City.find();
    
    if (city) {
        res.json(city);
    } else {
        res.send("Something went wrong");
    }
});

// Fetch a single city by name

app.get('/city/:name', async (req, res) => {
    try {
        const cityName = req.params.name;
        const city = await City.findOne({ title: cityName });

        if (city) {
            res.json(city);
        } else {
            res.status(404).send('City not found');
        }
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error fetching city");
    }
});



connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
    
});