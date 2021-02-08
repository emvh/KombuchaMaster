const express = require('express')
const app = express()
const port = 3000
const db = require('../database')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/brews', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`KombuchaMaster listening at http://localhost:${port}`)
})