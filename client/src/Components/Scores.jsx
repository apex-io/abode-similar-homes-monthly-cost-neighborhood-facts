/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Scores = ({ neighborhood }) => {
  let walkScore;
  let transitScore;

  if (neighborhood.walk_score >= 70 && neighborhood.walk_score <= 89) {
    walkScore = '(Very Walkable)';
  } else {
    walkScore = '(Walker\'s Paradise)';
  }

  if (neighborhood.transit_score >= 70 && neighborhood.transit_score <= 89) {
    transitScore = '(Excellent Transit)';
  } else {
    transitScore = '(Rider\'s Paradise)';
  }

  return (
    <div id="scoresContainer">
      <div>
        <span className="scoreText">Walk Score<sup>®</sup>:</span>
        <span className="score"> {neighborhood.walk_score}</span>
        <span className="scoreGrade"> {walkScore}</span>
      </div>
      <div>
        <span className="scoreText">Transit Score<sup>™</sup>:</span>
        <span className="score"> {neighborhood.transit_score}</span>
        <span className="scoreGrade"> {transitScore}</span>
      </div>
    </div>
  );
};

export default Scores;
