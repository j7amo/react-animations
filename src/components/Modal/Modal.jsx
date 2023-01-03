import React from 'react';
import * as PropTypes from 'prop-types';

import './Modal.css';

function Modal({ showState, onClose }) {
  const classes = `Modal ${
    showState === 'exiting' ? 'ModalClose' : 'ModalOpen'
  }`;

  return (
    <div className={classes}>
      <h1>A Modal</h1>
      <button className="Button" onClick={onClose} type="button">
        Dismiss
      </button>
    </div>
  );
}

Modal.propTypes = {
  showState: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
