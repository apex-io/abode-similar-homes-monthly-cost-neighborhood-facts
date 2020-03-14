/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      neighborhoods: [],
    };
    this.getNeighborhoodData = this.getNeighborhoodData.bind(this);
  }

  componentDidMount() {
    this.getNeighborhoodData();
  }

  getNeighborhoodData() {
    axios.get('/api/neighborhoods')
      .then((response) => {
        console.log(response);
        this.setState({ neighborhoods: response.data });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div>Hello</div>
    );
  }
}

export default App;
