const Brew = require('../database');

const getBrews = (selectedBrewId, callback) => {
  if (selectedBrewId) {
    Brew.findOne({ _id: selectedBrewId }, callback);
  } else {
    Brew.find(callback);
  }
};

const addBrew = (newBrew, callback) => {
  Brew.create(newBrew, callback);
}

module.exports = {
  getBrews,
  addBrew,
  updateBrew,
}

