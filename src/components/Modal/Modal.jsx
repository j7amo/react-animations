import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import * as PropTypes from 'prop-types';

import './Modal.css';

function Modal({ isShown, onClose }) {
  return (
    // We can also do something similar with <CSSTransition/> which can be simply used as a wrapper
    // for any child JSX. The mechanism of tracking states is a bit different, and actually
    // it gives us to ways of working with it:
    // 1) We can provide a BASE className via "classNames" prop which will automatically be:
    // (1)concatenated by <CSSTransition/> component with a postfix depending on state
    // (postfixes: "-enter", "-enter-active", "-exit", "-exit-active")
    // (2) merged with className which is already present on the child element.
    // To use this fully we also need to define these classes
    // in CSS (e.g. "fade-slide-enter-active").
    // 2) Another way of working with it is passing a mapping object to "classNames" prop:
    // classname = {{
    //  enter: "SomeStyle-1",
    //  enterActive: "SomeStyle-2",
    //  exit: "SomeStyle-3",
    //  exitActive: "SomeStyle-4"
    // }}
    <CSSTransition
      in={isShown}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames="fade-slide"
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={onClose} type="button">
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
}

Modal.propTypes = {
  isShown: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
