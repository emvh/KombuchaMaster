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
  const id = { _id: updatedBrew._id };
  const update = updatedBrew;
  Brew.findByIdAndUpdate(id, update, { new: true }, callback);
 };

 const deleteBrew = (brewId, callback) => {
   Brew.deleteOne(brewId, callback);
 };

module.exports = {
  getBrews,
  addBrew,
  updateBrew,
  deleteBrew,
}

