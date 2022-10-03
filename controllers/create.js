const { createCar } = require('../services/carService');

const createController = require('express').Router();

createController.get('/', (req, res) => {
  res.render('create');
});

createController.post('/', async (req, res) => {
  console.log(res);
  try {
    const result = await createCar(req.body);
    res.redirect('/catalog/' + result._id);
  } catch (err) {
    console.log(err);
    res.render('create', {
      title: 'Request error',
      error: err.message.split('\n'),
    });
  }
});

module.exports = createController;
