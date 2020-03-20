/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import Scores from './Scores.jsx';
import Stats from './Stats.jsx';
import SeeMore from './SeeMore.jsx';
import NearbyHomes from './NearbyHomes.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      house: {},
      houses: [],
      neighborhood: {},
    };
    this.getHouseData = this.getHouseData.bind(this);
    this.getNeighborhoodData = this.getNeighborhoodData.bind(this);
  }

  componentDidMount() {
    this.getHouseData();
  }

  getNeighborhoodData(neighborhood) {
    axios.get('/api/neighborhoods', {
      params: {
        name: neighborhood,
      },
    })
      .then((response) => {
        const { house } = this.state;
        this.setState({
          house: { ...house },
          houses: response.data,
          neighborhood: response.data[0],
        });
        // console.log(response.data[0]);
      })
      .catch((err) => {
        throw err;
      });
  }

  getHouseData() {
    axios.get('/api/houses')
      .then((response) => {
        const { house, neighborhood } = this.state;
        if (!Object.keys(house).length) {
          this.setState({
            house: response.data[0],
            houses: response.data,
            neighborhood: { ...neighborhood },
          });
          // console.log(this.state.houses);
        } else {
          this.setState({
            house: { ...house },
            houses: { ...response.data },
            neighborhood: { ...neighborhood },
          });
        }
        this.getNeighborhoodData(this.state.house.neighborhood);
      })
      .catch((err) => {
        throw err;
      });
  }

  currentHouse(setHouse) {
    const { houses } = this.state;
    this.setState({ house: setHouse, houses: [...houses] });
  }

  render() {
    const { house, neighborhood } = this.state;
    const currentHouse = !Object.keys(house).length ? null : house;
    let scores = <div />;
    let stats = <div />;
    let nearbyHomes = <div />;
    let seeMore = <div />;
    if (Object.keys(neighborhood).length) {
      scores = <Scores neighborhood={neighborhood} />;
      stats = <Stats neighborhood={neighborhood} house={house} />;
      nearbyHomes = <NearbyHomes neighborhood={neighborhood} />;
      seeMore = <SeeMore />;
    }
    return (
      <div id="appContainer">
        <h2 id="neighborhoodHeader">
          Neighborhood: {currentHouse ? currentHouse.neighborhood : ''}
        </h2>
        {scores}
        {stats}
        {seeMore}
        <h3>Nearby Homes</h3>
        {nearbyHomes}
      </div>
    );
  }
}

export default App;
