const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kombucha', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!')
});

const brewSchema = new mongoose.Schema({
  brewId: Number,
  brewName: String,
  startDateISO: Date,
  brewDays: String,
  endDate: String,
  reminderEnabled: Boolean,
  teaType: String,
  teaValue: String,
  waterValue: String,
  sugarValue: String,
  starterTeaValue: String,
  notes: String
}); 

const Brew = mongoose.model('Brew', brewSchema);

module.exports = Brew;