/* eslint-disable react/self-closing-comp */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-one-expression-per-line */


import React from 'react';

const NearbyHomeCard = ({ houses }) => {
  let homes = <div />;
  let index = 0;

  if (houses.length !== 0) {
    homes = houses.map((home) => {
      index++;
      return (
        <div id={`card${index}`} className="houseCard">
          <div className="cardImage">
          </div>
          <div className="cardInfo">
            <div>
              <span className="homeCost">${Number(home.home_cost).toLocaleString()}</span>
            </div>
            <div className="homeAddress smallText">{home.home_address}, San Francisco, CA</div>
            <div>
              <span className="smallText bold">{home.bedrooms}</span>
              <span className="smallText"> bd</span>
              <span className="bullet smallText"> • </span>
              <span className="smallText bold">{home.bathrooms}</span>
              <span className="smallText"> ba</span>
              <span className="bullet smallText"> • </span>
              <span className="smallText bold">{home.sf}</span>
              <span className="smallText"> sqft</span>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="cardCarousel">{homes}</div>
  );
};


export default NearbyHomeCard;
