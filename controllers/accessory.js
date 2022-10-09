const {
  createAccessory,
  getAllAccessory,
} = require('../services/accessoryService');
const { getById } = require('../services/carService');

const accessoryController = require('express').Router();

accessoryController.get('/create', (req, res) => {
  res.render('createAccessory');
});

accessoryController.post('/create', async (req, res) => {
  try {
    await createAccessory(req.body.name);
    res.redirect('/catalog');
  } catch (err) {
    console.log(err);
  }
});

accessoryController.get('/:carId/addCarAccessory', async (req, res) => {
  const carId = req.params.carId;
  const car = await getById(carId);
  const accessories = await getAllAccessory();


  res.render('addAccessory', {
    car,
    accessories,
  });
});

accessoryController.post('/:carId/addCarAccessory', async (req, res) => {
  console.log(req.body);

  res.redirect('/accessory/' + req.params.carId + '/addCarAccessory');
});

module.exports = accessoryController;
