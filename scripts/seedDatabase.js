require('dotenv').config();
const mongoose = require('mongoose');
const City = require('../models/Cities'); 
const Event = require('../models/Events');

const uri = 'mongodb+srv://codeTeam1:Ip9GYXrIRgyRzA0X@cluster0.lpprxai.mongodb.net/';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const cities = [
    { title: 'Athens' },
    { title: 'Thessaloniki' },
    { title: 'Corfu' },
    { title: 'Serres'}
];

const events = [
    { title: 'Rock Concert', category: 'Music', description: 'An electrifying evening of rock music.', date: new Date(), time: '20:00', remainingTickets: 150, imageUrl: 'http://example.com/rockconcert.jpg',cityName: 'Athens' },
    { title: 'Jazz Night', category: 'Music', description: 'Smooth jazz in a cozy venue.', date: new Date(), time: '21:00', remainingTickets: 80, imageUrl: 'http://example.com/jazznight.jpg',cityName: 'Athens' },
    { title: 'Indie Film Screening', category: 'Cinema', description: 'Exclusive screening of an indie masterpiece.', date: new Date(), time: '19:00', remainingTickets: 50, imageUrl: 'http://example.com/indiefilm.jpg',cityName: 'Athens' },
    { title: 'Action Movie Marathon', category: 'Cinema', description: 'A marathon of the latest action movies.', date: new Date(), time: '18:00', remainingTickets: 200, imageUrl: 'http://example.com/actionmarathon.jpg',cityName: 'Athens' },
    { title: 'Local Soccer Match', category: 'Sports', description: 'Exciting local soccer teams face off.', date: new Date(), time: '17:00', remainingTickets: 300, imageUrl: 'http://example.com/soccermatch.jpg',cityName: 'Athens' },
    { title: 'Marathon', category: 'Sports', description: 'Annual city marathon. Come and join the race!', date: new Date(), time: '06:00', remainingTickets: 500, imageUrl: 'http://example.com/marathon.jpg',cityName: 'Thessaloniki' },
    { title: 'Classic Theater Play', category: 'Theater', description: 'A timeless classic performed by our local theater group.', date: new Date(), time: '20:00', remainingTickets: 120, imageUrl: 'http://example.com/classicplay.jpg',cityName: 'Thessaloniki' },
    { title: 'Modern Dance Performance', category: 'Theater', description: 'A modern dance performance that tells a captivating story.', date: new Date(), time: '20:30', remainingTickets: 100, imageUrl: 'http://example.com/moderndance.jpg',cityName: 'Thessaloniki' },
    { title: 'Tech Expo', category: 'Technology', description: 'Explore the latest in technology and innovation.', date: new Date(), time: '10:00', remainingTickets: 400, imageUrl: 'http://example.com/techexpo.jpg',cityName: 'Thessaloniki' },
    { title: 'Coding Workshop', category: 'Technology', description: 'Learn to code in one day. No prior experience required.', date: new Date(), time: '09:00', remainingTickets: 50, imageUrl: 'http://example.com/codingworkshop.jpg',cityName: 'Thessaloniki'  },
    { title: 'Electronic Music Festival', category: 'Music', description: 'A festival featuring top electronic music artists.', date: new Date(), time: '22:00', remainingTickets: 1000, imageUrl: 'http://example.com/electronicfestival.jpg',cityName: 'Corfu' },
    { title: 'Documentary Film Premiere', category: 'Cinema', description: 'Premiere of a groundbreaking documentary.', date: new Date(), time: '19:00', remainingTickets: 150, imageUrl: 'http://example.com/documentarypremiere.jpg',cityName: 'Corfu' },
    { title: 'Basketball Game', category: 'Sports', description: 'Local teams compete in a thrilling game.', date: new Date(), time: '18:00', remainingTickets: 250, imageUrl: 'http://example.com/basketballgame.jpg',cityName: 'Serres' },
    { title: 'Improv Night', category: 'Theater', description: 'A night of laughter and improvisation.', date: new Date(), time: '20:00', remainingTickets: 70, imageUrl: 'http://example.com/improvnight.jpg',cityName: 'Serres' },
    { title: 'Startup Pitch Event', category: 'Technology', description: 'Emerging startups pitch their ideas to potential investors.', date: new Date(), time: '14:00', remainingTickets: 100, imageUrl: 'http://example.com/startup.jpg',cityName: 'Serres'}];


    async function seedDB() {
        try {
            await City.deleteMany({});
            console.log('cities cleared');
            await Event.deleteMany({});
            console.log('events cleared');


            const cityMap = {};
            for (let city of cities) {
                const newCity = new City(city);
                await newCity.save();
                cityMap[city.title] = newCity._id; // Map city title to its _id

            }
            console.log('cities added');

            for (const event of events) {
                const cityId = cityMap[event.cityName];
                if (!cityId) {
                    console.log(`City not found for ${event.title}`);
                    continue;
                }
                delete event.cityName; // Remove temporary property
                const newEvent = await new Event({ ...event, city: cityId }).save();
                
                // Add event ID to the city's events array
                await City.findByIdAndUpdate(cityId, { $push: { events: newEvent._id } });
            }
    
            console.log('Events added and associated with cities');
        } catch(error) {
            console.log('An error occured', error);
        } finally {
            mongoose.connection.close();
        }
    }
    seedDB();