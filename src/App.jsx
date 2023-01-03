import React, { Component } from 'react';

import './App.css';
import { Transition } from 'react-transition-group';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List'; // we need this value to set the amount of time between state changes

// we need this value to set the amount of time between state changes
const duration = 500;

// or we can define it as an object to use different timeouts
// for different states:
// const duration = {
//   appear: 500,
//   enter: 300,
//   exit: 500,
// };

const defaultStyles = {
  backgroundColor: 'red',
  width: 100,
  height: 100,
  margin: '0 auto',
  transition: `opacity ${duration}ms ease-out`,
};

// this object maps 'entering', 'entered', 'exiting', 'exited' states to styles.
// the state names are pre-defined and we cannot change them
const transitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  },
  exited: {
    opacity: 0,
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      isBlockShown: false,
    };
  }

  modalOpenHandler = () => {
    this.setState({
      isModalShown: true,
    });
  };

  modalCloseHandler = () => {
    this.setState({
      isModalShown: false,
    });
  };

  showBlockToggleHandler = () => {
    this.setState((prevState) => ({
      isBlockShown: !prevState.isBlockShown,
    }));
  };

  render() {
    const { isModalShown, isBlockShown } = this.state;

    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          type="button"
          onClick={this.showBlockToggleHandler}
        >
          Click me
        </button>
        <br />
        {/* <Transition/> component is helpful when we want both things happen:
         - mount/unmount child component;
         - apply styles BEFORE component starts to unmount when rendering conditionally
         This is especially useful when we have some transition/animation for removing
         component. For example when we close Modal window, we want to play some
         slick animation BUT usually component was already unmounted and is no longer
         in the DOM, so there's no point for browser to play any animation anymore. */}
        <Transition
          mountOnEnter
          unmountOnExit
          in={isBlockShown}
          timeout={duration}
        >
          {(state) => (
            <div
              style={{
                ...defaultStyles,
                ...transitionStyles[state],
              }}
            />
          )}
        </Transition>
        <Transition
          in={isModalShown}
          timeout={duration}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <Modal showState={state} onClose={this.modalCloseHandler} />
          )}
        </Transition>
        {isModalShown && (
          <Backdrop isShown={isModalShown} onClick={this.modalCloseHandler} />
        )}
        <button
          className="Button"
          type="button"
          onClick={this.modalOpenHandler}
        >
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
