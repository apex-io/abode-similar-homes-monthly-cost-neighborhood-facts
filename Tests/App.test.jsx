/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
// import axios from 'axios';
import App from '../client/src/Components/App.jsx';
import Scores from '../client/src/Components/Scores.jsx';
import Stats from '../client/src/Components/Stats.jsx';
import SeeMore from '../client/src/Components/SeeMore.jsx';

/* const React = require('react');
const { shallow } = require('enzyme');
const App = require('../client/src/Components/App.jsx'); */

describe('App component functionality', () => {
  test('should render text on screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h2').text().includes('Neighborhood')).toBe(true);
  });

  test('should find Scores component', () => {
    const wrapper = mount(<App />);
    const matchingElement = wrapper.find('#appContainer').containsMatchingElement(<Scores />);
    expect(matchingElement).toBe(true);
  });

  test('should find Stats component', () => {
    const wrapper = mount(<App />);
    const matchingElement = wrapper.find('#appContainer').containsMatchingElement(<Stats />);
    expect(matchingElement).toBe(true);
  });

  test('should find SeeMore component', () => {
    const wrapper = mount(<App />);
    const matchingElement = wrapper.find('#appContainer').containsMatchingElement(<SeeMore />);
    expect(matchingElement).toBe(true);
  });
});
