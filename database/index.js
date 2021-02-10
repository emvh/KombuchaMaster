const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kombucha', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!')
});

const brewSchema = new mongoose.Schema({
  brewId: Number,
  name: String,
  startDate: String,
  brewingDays: Number,
  endDate: String,
  reminder: Boolean,
  teaMeasurement: Number,
  teaType: String,
  waterMeasurement: Number,
  sugarMeasurement: Number,
  starterTeaMeasurement: Number,
  notes: String
});

const Brew = mongoose.model('Brew', brewSchema);

module.exports = {
  db,
  Brew
}