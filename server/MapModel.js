const db = require('../database');

const getMarkers = (callback) => {
  db.Marker.find(callback);
};

const addMarker = (newMarker, callback) => {
  db.Marker.create(newMarker, callback);
};

module.exports = {
  getMarkers,
  addMarker,
}