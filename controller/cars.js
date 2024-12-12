const Car = require('../models/cars');

const carController = {
  createcarData: async (req, res) => {
    const carData = req.body; // This should include car details and image URLs

    // If you have one or more image URLs in the request body
    if (req.body.carImages && Array.isArray(req.body.carImages)) {
      carData.carImages = req.body.carImages; // Use the carImages array passed in the request
    }

    try {
      const newCar = new Car(carData); // Create a new car document with the car data
      await newCar.save(); // Save it to the database

      // Respond with success only once
      res.status(201).json({
        message: 'Car created successfully',
        car: newCar,
      });
    } catch (error) {
      // Handle any errors while saving the car data
      if (!res.headersSent) {
        res.status(500).json({
          message: 'Error creating car',
          error: error.message,
        });
      }
    }
  },
};

module.exports = carController;
