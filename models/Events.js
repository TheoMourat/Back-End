const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const EventSchema = new Schema({
    title: {
        type : String, 
        required: true,
    },
    category: {
        type : String, 
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    remainingTickets: {
        type: number,
        required: true,
        default: 10,
    },
    image: {
        type: String
    }

});

module.exports = mongoose.model('Event', EventSchema);