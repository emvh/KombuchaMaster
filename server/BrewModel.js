const db = require('../database');

const getBrews = (selectedBrewId, callback) => {
  if (selectedBrewId) {
    db.Brew.findOne({ _id: selectedBrewId }, callback);
  } else {
    db.Brew.find(callback);
  }
};

const addBrew = (newBrew, callback) => {
  db.Brew.create(newBrew, callback);
};

const updateBrew = (updatedBrew, callback) => {
  const id = { _id: updatedBrew._id };
  const update = updatedBrew;
  db.Brew.findByIdAndUpdate(id, update, { new: true }, callback);
 };

 const deleteBrew = (brewId, callback) => {
   db.Brew.deleteOne(brewId, callback);
 };

module.exports = {
  getBrews,
  addBrew,
  updateBrew,
  deleteBrew,
}

