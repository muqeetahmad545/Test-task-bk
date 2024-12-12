const mongoose = require('mongoose');
const colors = require('colors');
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log(`Connecting to MongoDB Successfully`.bgCyan);
  } catch (error) {
    console.error('Error connecting to Database:', error);
  }
}
module.exports = connectToDatabase;
