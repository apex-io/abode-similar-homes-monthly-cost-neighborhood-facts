/* eslint-disable no-plusplus */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
const faker = require('faker');
const db = require('./index.js');

const neighborhoods = [
  'South of Market',
  'Financial District',
  'Civic Center',
  'Noe Valley',
  'Haight-Ashbury',
  'Fillmore',
  'Nob Hill',
  'Pacific Heights',
  'Richmond',
  'Sunset',
  'Mission',
  'Laurel Heights',
  'North Beach',
  'Castro',
];


const populateNeighborhoods = () => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < neighborhoods.length; i++) {
      const transitScore = faker.random.number({ min: 70, max: 99 });
      const walkScore = faker.random.number({ min: 70, max: 99 });
      const valueIncDec = faker.random.number({ min: -3, max: 4 });
      const medianValue = faker.random.number({ min: 1000, max: 1500 }) * 1000;
      const queryStr = `INSERT INTO neighborhoods (neighborhood, transit_score, walk_score, value_inc_dec, median_value) VALUES ("${neighborhoods[i]}", ${transitScore}, ${walkScore}, ${valueIncDec}, ${medianValue})`;
      db.connection.query(queryStr, (err, result, fields) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    }
  });
};

populateNeighborhoods();

module.exports = { populateNeighborhoods };
