import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Competitor = ({ name }) => (
  <div className={'competitor'}>{name}</div>
);

Competitor.propTypes = {
  name: PropTypes.string.isRequired,
};

export { Competitor };
