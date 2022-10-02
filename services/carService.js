const Car = require('../models/Car');

function getAllCars() {
  const data = Car.find({}).lean();
  return data;
}

function getById(id) {
  return Car.findById(id).populate().lean();
}

module.exports = {
  getAllCars,
  getById,
};
