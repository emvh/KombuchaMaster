const Brew = require('../database');

const getBrews = (callback) => {
  Brew.find(callback);
};

const addBrew = (newBrew, callback) => {
  Brew.create(newBrew, callback);
}

module.exports = {
  getBrews,
  addBrew
}

