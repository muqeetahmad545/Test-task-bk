const mongoose = require('mongoose');
const colors = require('colors');

async function connectToDatabase() {
  try {
    // Connection options
    const options = {
      useNewUrlParser: true, // To avoid deprecation warnings
      useUnifiedTopology: true, // To avoid deprecation warnings
      serverSelectionTimeoutMS: 5000, // Timeout for selecting a server (5 seconds)
      socketTimeoutMS: 45000, // Timeout for socket operations (45 seconds)
    };

    // Connecting to MongoDB with the options
    await mongoose.connect(process.env.MONGO_URL, options);
    console.log(`Connecting to MongoDB Successfully`.bgCyan);
  } catch (error) {
    console.error('Error connecting to Database:', error);
  }
}

module.exports = connectToDatabase;
