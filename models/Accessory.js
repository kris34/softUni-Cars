const { Schema, model, Types } = require('mongoose');

const accessorySchema = new Schema({
  name: { type: String },
  cars: { type: [Types.ObjectId], default: [], ref: 'Car' },
});

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;
