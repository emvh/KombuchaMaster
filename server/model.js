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
};

const updateBrew = (updatedBrew, callback) => {
  const filter = { _id: updatedBrew._id };
  const update = updatedBrew
  Brew.findByIdAndUpdate(filter, update, { new: true }, callback);
 };

module.exports = {
  getBrews,
  addBrew,
  updateBrew,
}

