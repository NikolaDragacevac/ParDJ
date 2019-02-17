import React, { Component } from 'react';
import '../Util/main.css';


export default class Selection extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>
          Create or Join a room
        </h1>
        <div id="div1">
          <a className = "button buttonleft" href="/create">Create room</a>
          <a className = "button buttonright" href="/join">Join room</a>
        </div>
      </header>
    );
  }
}