/* eslint-disable quote-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import $ from 'jquery';
import NearbyHomes from './NearbyHomes.jsx';

const SeeMore = ({ neighborhood }) => {
  const handleSeeMoreClick = () => {
    $('.moreDetails').css({
      'display': 'block',
    });
    $('#more').css({
      'display': 'none',
    });
    $('#less').css({
      'display': 'block',
    });
  };

  const handleSeeLessClick = () => {
    $('.moreDetails').css({
      'display': 'none',
    });
    $('#less').css({
      'display': 'none',
    });
    $('#more').css({
      'display': 'block',
    });
  };

  return (
    <div>
      <div className="see" id="more" onClick={handleSeeMoreClick}>
        <div className="seeArrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" /></svg>
        </div>
        <div className="seeText"><span>See more neighborhood details</span></div>
      </div>

      <div className="moreDetails">
        <iframe className="map" title="map" width="100%" height="200px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-122.43778710602784%2C37.77774105677948%2C-122.43458991288209%2C37.779782588007535&amp;layer=mapnik&amp;marker=37.77876182944124%2C-122.43618850945495" /><br />
        <h3 id="nearbyHomesHeader">Nearby Homes</h3>
        <div><NearbyHomes neighborhood={neighborhood} /></div>
      </div>

      <div className="see" id="less" onClick={handleSeeLessClick}>
        <div className="seeArrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z" /></svg>
        </div>
        <div className="seeText"><span>See less neighborhood details</span></div>
      </div>
    </div>
  );
};

export default SeeMore;
