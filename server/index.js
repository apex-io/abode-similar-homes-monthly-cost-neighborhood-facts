/* eslint-disable prefer-template */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const port = 3000;
const app = express();

// eslint-disable-next-line prefer-template
// eslint-disable-next-line no-path-concat
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/neighborhoods', (req, res) => {
  db.getAllNeighborhoodData()
    .then((results) => {
      console.log(results);
      return res.status(200).json(results);
    })
    .catch((err) => {
      throw err;
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
