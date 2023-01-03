/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import * as PropTypes from 'prop-types';

import './Backdrop.css';

function Backdrop({ isShown, onClick }) {
  const classes = `Backdrop ${isShown ? 'BackdropOpen' : 'BackdropClose'}`;

  return <div className={classes} onClick={onClick} />;
}

Backdrop.propTypes = {
  isShown: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
