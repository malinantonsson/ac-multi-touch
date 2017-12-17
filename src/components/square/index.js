import React from 'react';
import './style.scss';

const Square = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={'square'}>{children}</div>
  )
};

export { Square };
