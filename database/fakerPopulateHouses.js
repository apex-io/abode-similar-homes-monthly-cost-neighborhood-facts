/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
const faker = require('faker');
const db = require('./index.js');

const streetSuff = [
  'St.',
  'Rd.',
  'Ave.',
  'Ln.',
  'Pl.',
  'Ct.',
  'Terr.',
  'Blvd.',
  'Wy.',
  'Dr.',
];


const populateHouses = () => {
  db.getAllNeighborhoodData()
    .then((neighborhoods) => {
      return new Promise((resolve, reject) => {
        for (let i = 0; i < 100; i++) {
          const neighborhood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
          const homeCost = Math.round((Math.floor(neighborhood.median_value * faker.finance.amount(1.10, 1.30, 2))) / 1000) * 1000;
          const bedrooms = faker.random.number({ min: 3, max: 6 });
          const bathrooms = bedrooms - faker.random.number({ min: 1, max: 2 });
          const homeAddress = faker.address.streetName() + ' ' + streetSuff[Math.floor(Math.random() * streetSuff.length)];
          const sf = bedrooms * faker.random.number({ min: 750, max: 950 });
          const queryStr = `INSERT INTO houses (neighborhood, home_cost, bedrooms, bathrooms, home_address, sf) VALUES ("${neighborhood.neighborhood}", ${homeCost}, ${bedrooms}, ${bathrooms}, "${homeAddress}", ${sf})`;
          db.connection.query(queryStr, (err, result, fields) => {
            if (err) {
              return reject(err);
            }
            resolve(result);
          });
        }
      });
    })
    .catch((err) => {
      throw err;
    });
};


populateHouses();

module.exports = { populateHouses };
