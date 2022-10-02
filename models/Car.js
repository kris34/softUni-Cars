const { Schema, model } = require('mongoose');

const carSchema = new Schema({
  brand: { type: String },
  model: { type: String },
  price: { type: Number },
  year: { type: Number },
  description: { type: String },
});

const Car = model('Car', carSchema);

module.exports = Car;
