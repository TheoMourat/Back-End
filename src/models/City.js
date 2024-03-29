const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CitySchema = new Schema({
    title: {
        type : String, 
        required: true,
    },
    events: [{
        type: Schema.Types.ObjectId, 
        ref: 'Event' 
    }],
    image: {
        type: String,
        required: true
    },
    numOfEvents: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('City', CitySchema);