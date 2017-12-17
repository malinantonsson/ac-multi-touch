import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ColourPicker = ({onClose, onSelectColour}) => (
  <div className={'colourPicker'}>
    <div className={'colourPicker__item colourPicker__item--red'} onClick={() => {onSelectColour('red');}} />
    <div className={'colourPicker__item colourPicker__item--pink'} onClick={() => {onSelectColour('pink');}} />
    <div className={'colourPicker__item colourPicker__item--grey'} onClick={() => {onSelectColour('grey');}} />
    <div className={'colourPicker__item colourPicker__item--lightblue'} onClick={() => {onSelectColour('lightblue');}} />
    <div className={'colourPicker__item colourPicker__item--blue'} onClick={() => {onSelectColour('blue');}} />
    <div className={'colourPicker__item colourPicker__close'} onClick={() => {onClose();}} />
  </div>
);

ColourPicker.propTypes = {
  onSelectColour: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { ColourPicker };
