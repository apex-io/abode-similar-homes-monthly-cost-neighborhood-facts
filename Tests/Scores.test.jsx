/* eslint-disable no-undef */
import React from 'react';
// import { shallow, mount } from 'enzyme';
import Scores from '../client/src/Components/Scores.jsx';
import neighborhood from './dummyData.js';

/* const React = require('react');
const { shallow } = require('enzyme');
const App = require('../client/src/Components/App.jsx'); */

describe('Scores component functionality', () => {
  test('should render Walk Score', () => {
    const wrapper = mount(<Scores neighborhood={neighborhood} />);
    const matchingElement = wrapper.find('.score').containsMatchingElement('85');
    expect(matchingElement).toBe(true);
  });

  test('should render Transit Score', () => {
    const wrapper = mount(<Scores neighborhood={neighborhood} />);
    const matchingElement = wrapper.find('.score').containsMatchingElement('94');
    expect(matchingElement).toBe(true);
  });

  test('should render Walk Score Grade text', () => {
    const wrapper = mount(<Scores neighborhood={neighborhood} />);
    const matchingElement = wrapper.find('.scoreGrade').containsMatchingElement('(Very Walkable)');
    expect(matchingElement).toBe(true);
  });

  test('should render Transit Score Grade text', () => {
    const wrapper = mount(<Scores neighborhood={neighborhood} />);
    const matchingElement = wrapper.find('.scoreGrade').containsMatchingElement('(Rider\'s Paradise)');
    expect(matchingElement).toBe(true);
  });
});
