const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    carModel: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    numOfCopy:{
        type: Number,
        required: true
    },
    carImage:{
        type: String,
        required: true
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
