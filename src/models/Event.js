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
        enum: ['Μουσική', 'Κινηματογράφος', 'Αθλητικά', 'Θέατρο'],
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
        type: Number,
        required: true,
        default: 10,
    },
    image: {
        type: String
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: true 
    }

});

module.exports = mongoose.model('Event', EventSchema);