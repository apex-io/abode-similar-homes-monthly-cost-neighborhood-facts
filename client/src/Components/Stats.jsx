/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Stats = ({ neighborhood, house }) => {
  let incDecWordPast;
  let incDecArrowPast;
  let incDecPast = 'incDec';

  if (neighborhood.value_inc_dec_past === 0) {
    incDecWordPast = 'changed';
  } else if (neighborhood.value_inc_dec_past > 0) {
    incDecWordPast = 'risen';
    incDecArrowPast = '↑';
    incDecPast = 'inc';
  } else {
    incDecWordPast = 'fallen';
    incDecArrowPast = '↓';
    incDecPast = 'dec';
  }

  let incDecWordFuture;
  let incDecArrowFuture;
  let incDecFuture = 'incDec';
  const mathAbs = Math.abs(neighborhood.value_inc_dec_future);

  if (neighborhood.value_inc_dec_future === 0) {
    incDecWordFuture = 'remain the same';
  } else if (neighborhood.value_inc_dec_future > 0) {
    incDecWordFuture = 'increase';
    incDecArrowFuture = '↑';
    incDecFuture = 'inc';
  } else {
    incDecWordFuture = 'decrease';
    incDecArrowFuture = '↓';
    incDecFuture = 'dec';
  }


  let percentDiff;
  let incDecMedian = 'incDec';
  let incDecArrowMedian;
  let higherLower;

  if (house.home_cost > neighborhood.median_value) {
    const diff = house.home_cost - neighborhood.median_value;
    percentDiff = ((diff / neighborhood.median_value) * 100).toFixed(1);
    incDecMedian = 'inc';
    incDecArrowMedian = '↑';
    higherLower = 'higher';
  } else {
    const diff = neighborhood.median_value - house.home_cost;
    percentDiff = Math.abs(((diff / house.home_cost) * 100).toFixed(1));
    incDecMedian = 'dec';
    incDecArrowMedian = '↓';
    higherLower = 'lower';
  }

  return (
    <div>
      <h3>Neighborhood Stats</h3>
      <ul className="statsList">
        <li className="statslistItem">
          <span className="homeValues">Home values</span>
          <span> in {neighborhood.neighborhood} have </span>
          <span className={incDecPast}>{incDecWordPast}</span>
          <span className={incDecPast}> {Math.abs(neighborhood.value_inc_dec_past)}%</span>
          <span className={neighborhood.value_inc_dec_past ? incDecPast : 'hidden'}> ({incDecArrowPast})</span>
          <span> over the past 12 months.</span>
        </li>
        <li className="statslistItem">
          <span>Abode predicts the home values in</span>
          <span> {neighborhood.neighborhood} will</span>
          <span className={incDecFuture}> {incDecWordFuture}</span>
          <span className={neighborhood.value_inc_dec_future ? incDecFuture : 'hidden'}> {mathAbs}%</span>
          <span className={neighborhood.value_inc_dec_future ? incDecFuture : 'hidden'}> ({incDecArrowFuture})</span>
          <span> in the next year.</span>
        </li>
        <li className="statslistItem">
          <span>This home is valued </span>
          <span className={incDecMedian}> {percentDiff}%</span>
          <span className={incDecMedian}> {higherLower} ({incDecArrowMedian})</span>
          <span> than the median home in</span>
          <span> {neighborhood.neighborhood}.</span>
        </li>
        <li className="statslistItem">
          <span>The</span>
          <span className="abodestimate"> median Abodestimate</span>
          <span><sup>®</sup></span>
          <span> for this neighborhood is</span>
          <span> ${Number(neighborhood.median_value).toLocaleString()}.</span>
        </li>
      </ul>
    </div>
  );
};

export default Stats;
