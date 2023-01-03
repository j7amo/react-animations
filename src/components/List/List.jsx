/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';

import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3],
    };
  }

  addItemHandler = () => {
    this.setState((prevState) => ({
      items: prevState.items.concat(prevState.items.length + 1),
    }));
  };

  removeItemHandler = (selIndex) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item, index) => index !== selIndex),
    }));
  };

  render() {
    const { items } = this.state;

    const listItems = items.map((item, index) => (
      <li
        key={Math.random().toString()}
        className="ListItem"
        onClick={() => this.removeItemHandler(index)}
      >
        {item}
      </li>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler} type="button">
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <ul className="List">{listItems}</ul>
      </div>
    );
  }
}

export default List;
