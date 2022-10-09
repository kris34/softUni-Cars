const { Schema, model, Types } = require('mongoose');

const carSchema = new Schema({
  brand: { type: String },
  model: { type: String },
  price: { type: Number },
  year: { type: Number },
  description: { type: String },
  accessories: { type: [Types.ObjectId], default: [], ref: 'Accessory' },
});

const Car = model('Car', carSchema);

module.exports = Car;
