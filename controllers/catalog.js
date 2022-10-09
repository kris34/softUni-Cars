const { getAllCars, getById } = require('../services/carService');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {
  const cars = await getAllCars();
  res.render('catalog', {
    title: 'Catalog',
    cars,
  });
});

catalogController.get('/:id', async (req, res) => {
  const carId = req.params.id;
  const car = await getById(carId);

  if (car) {
    res.render('details', {
      title: 'Car Details',
      car,
    });
  }
});

module.exports = catalogController;
