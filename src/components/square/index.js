import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Square = ({ onClick, children }) => <div onClick={onClick} className={'square'}>{children}</div>;

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export { Square };
