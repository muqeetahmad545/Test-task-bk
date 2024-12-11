const Car = require("../models/cars");

const carController = {
  createcarData: async (req, res) => { 
    const carData = req.body;
    try {
      const newCar = new Car(carData);
      await newCar.save(); 
      res.status(201).json({ message: "Car created successfully", car: newCar });
    } catch (error) {
      res.status(500).json({ message: "Error creating car", error: error.message });
    }
  }
};

module.exports = carController;  
