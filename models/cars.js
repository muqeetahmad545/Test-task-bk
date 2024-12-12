const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carModel: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  numOfCopy: {
    type: Number,
    required: false,
  },
  carImages: { type: String },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
