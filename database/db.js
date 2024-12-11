const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/TsetApp");
        console.log('Database connection successfully');
    } catch (err) {
        console.error('Database connection error:', err);
    }
};

module.exports = connectToDatabase;
