const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kombucha', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!')
});

const brewSchema = new mongoose.Schema({
  brewName: String,
  startDateISO: Date,
  startDate: String,
  brewDays: String,
  endDate: String,
  reminderEnabled: Boolean,
  teaType: String,
  teaValue: String,
  waterValue: String,
  sugarValue: String,
  starterTeaValue: String,
  notes: String,
  status: String
});

const Brew = mongoose.model('Brew', brewSchema);

const markerSchema = new mongoose.Schema({
  title: String,
  latitude: Number,
  longitude: Number,
  price: Number,
  description: String,
  user: String,
  phone: Number,
});

const Marker = mongoose.model('Marker', markerSchema);

module.exports = {
  Brew,
  Marker,
};