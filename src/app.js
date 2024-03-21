require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const cityRoutes = require('./routes/CityRoutes'); 
const eventRoutes = require('./routes/EventRoutes');

const app = express();

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`);
        console.log(`thodoris branch`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to the City Events API!');
  });
  
app.use('/cities', cityRoutes);
app.use('/events', eventRoutes);


module.exports = app;
