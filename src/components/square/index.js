import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Square = ({ onClick, children , id}) =>
    <div id={id} onClick={onClick} className={'square'}>{children}</div>;

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  id: PropTypes.string
};

export { Square };
