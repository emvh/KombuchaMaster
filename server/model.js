const db = require('../database');

const getBrews = (callback) => {
  console.log('getBrews')
  db.Brew.find(callback);
};

module.exports = {
  getBrews
}

