const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CitySchema = new Schema({
    title: {
        type : String, 
        required: true,
    },
    events: [{
        type: Schema.Types.ObjectId, // Use ObjectId type for references
        ref: 'Event' // Reference to the Event model
    }]
});

module.exports = mongoose.model('City', CitySchema);