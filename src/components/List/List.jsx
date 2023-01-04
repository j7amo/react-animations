/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: Math.random().toString(),
          value: 1,
        },
      ],
    };
  }

  addItemHandler = () => {
    this.setState((prevState) => ({
      items: prevState.items.concat({
        id: Math.random().toString(),
        value: prevState.items.length + 1,
      }),
    }));
  };

  removeItemHandler = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { items } = this.state;

    // it is VERY IMPORTANT for list elements to have ID
    // in order for 'removeItemHandler' to work correctly
    const listItems = items.map(({ id, value }) => (
      <CSSTransition key={id} timeout={500} classNames="fade">
        <li className="ListItem" onClick={() => this.removeItemHandler(id)}>
          {value}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler} type="button">
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        {/* by default <TransitionGroup/> renders as a <div>
         but we can change it via 'component' prop */}
        <TransitionGroup className="List" component="ul">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
