/* eslint-disable quote-props */
import React from 'react';
import Axios from 'axios';
import $ from 'jquery';
import NearbyHomeCard from './NearbyHomeCard.jsx';

class NearbyHomes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nearbyHomes: [],
      cardOneCounter: 1,
      cardTwoCounter: 3,
    };

    this.getHouseData = this.getHouseData.bind(this);
    this.clickCarouselLeft = this.clickCarouselLeft.bind(this);
    this.clickCarouselRight = this.clickCarouselRight.bind(this);
  }


  componentDidMount() {
    const { neighborhood } = this.props;
    this.getHouseData(neighborhood);
  }

  getHouseData(neighborhood) {
    Axios.get('/api/houses', {
      params: {
        name: neighborhood.neighborhood,
      },
    })
      .then((response) => {
        this.setState({
          nearbyHomes: response.data,
        });
      });
  }

  clickCarouselLeft() {
    const { cardOneCounter, cardTwoCounter } = this.state;

    if (cardTwoCounter > 2) {
      this.setState({
        cardOneCounter: cardOneCounter - 1,
        cardTwoCounter: cardTwoCounter - 1,
      });
      $(`#card${cardOneCounter}`).css({
        'display': 'inline',
      });
      $(`#card${cardTwoCounter}`).css({
        'display': 'none',
      });
    }
    // console.log(this.state);
    // console.log('card one:', cardOneCounter, 'deleted card', cardTwoCounter);
  }

  clickCarouselRight() {
    const { cardOneCounter, cardTwoCounter, nearbyHomes } = this.state;

    if (cardTwoCounter < nearbyHomes.length) {
      this.setState({
        cardOneCounter: cardOneCounter + 1,
        cardTwoCounter: cardTwoCounter + 1,
      });
      $(`#card${cardTwoCounter}`).css({
        'display': 'inline',
      });
      $(`#card${cardOneCounter}`).css({
        'display': 'none',
      });
    }
    // console.log(this.state);
    // console.log('deleted card:', cardOneCounter, 'card two:', cardTwoCounter);
  }

  render() {
    const { nearbyHomes } = this.state;

    return (
      <div className="cardContainer">
        <button className="carouselButton" onClick={this.clickCarouselLeft} type="button">{'<'}</button>
        <div><NearbyHomeCard houses={nearbyHomes} /></div>
        <button className="carouselButton" onClick={this.clickCarouselRight} type="button">{'>'}</button>
      </div>
    );
  }
}

export default NearbyHomes;
