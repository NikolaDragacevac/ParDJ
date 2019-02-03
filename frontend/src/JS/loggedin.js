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
          <a class = "button buttonleft" href="/create">Create room</a>
          <a class = "button buttonright" href="/join">Join room</a>
        </div>
        <p>
          Cool
        </p>
      </header>
    );
  }
}