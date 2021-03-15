const express = require('express');
const app = express();
const port = 3000
const db = require('../database');
const model = require('./model.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/brews', (req, res) => {
  const selectedBrewId = req.query._id;
  model.getBrews(selectedBrewId, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.post('/api/brews', (req, res) => {
  const newBrew = req.body;
  model.addBrew(newBrew, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.listen(port, () => {
  console.log(`KombuchaMaster listening at http://localhost:${port}`)
})