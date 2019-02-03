import React, { Component } from 'react';
import './create.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Create extends Component{
  render(){
    return (
      <header className="App-header">
        <h1>
          Log in to your spotify
        </h1>
          <button class = "button button3">Log in to Spotify</button>
        <p>
          Cool
        </p>
      </header>
    );
  }
}
