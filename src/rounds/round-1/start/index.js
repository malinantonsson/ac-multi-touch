import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Start = ({onStartRoundOne, roundOneProgress}) => {
  return (
    <div className={'start'}>
      <h1>Micro Geographic Pricing Activity</h1>
      <p>Progress: { roundOneProgress }</p>
      <div className={'start__button'}>
        <button onClick={onStartRoundOne}>Start</button>
      </div>
    </div>
  );
};

Start.propTypes = {
  onStartRoundOne: PropTypes.func.isRequired,
  roundOneProgress: PropTypes.string.isRequired,
};

export default Start;
