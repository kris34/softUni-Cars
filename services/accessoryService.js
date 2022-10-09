const Accessory = require('../models/Accessory');

async function getAllAccessory() {
  return Accessory.find({}).lean();
}

async function createAccessory(name) {
  return Accessory.create({
    name,
  });
}

module.exports = {
  getAllAccessory,
  createAccessory,
};
