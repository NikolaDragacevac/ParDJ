import React, { Component } from 'react';
import '../Util/main.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


export default class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <header className="App-header">
        <h1>
          Create or Join a room
        </h1>
        <div id="div1">
          <button class = "button buttonleft" onClick={this.handleClick}>Button1</button>
          <button class = "button buttonright">Button2</button>
        </div>
        <p>
          Cool
        </p>
      </header>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);