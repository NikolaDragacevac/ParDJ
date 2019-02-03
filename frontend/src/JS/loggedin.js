import React, { Component } from 'react';
import '../Util/main.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


export default class Selection extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>
          Create or Join a room
        </h1>
        <div id="div1">
          <button class = "button buttonleft">Button1</button>
          <button class = "button buttonright">Button2</button>
        </div>
        <p>
          Cool
        </p>
      </header>
    );
  }
}
