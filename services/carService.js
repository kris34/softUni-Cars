const Car = require('../models/Car');

function getAllCars() {
  const data = Car.find({}).lean();
  return data;
}

function getById(id) {
  return Car.findById(id).populate().lean();
}

async function createCar(carData) {
  const car = {
    brand: carData.brand,
    model: carData.model,
    price: Number(carData.price),
    year: Number(carData.year),
    description: carData.description,
  };

  const result = await Car.create(car);
  return result;
}

module.exports = {
  getAllCars,
  getById,
  createCar,
};
