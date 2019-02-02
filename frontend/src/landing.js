import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


export default class Landing extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>
          welcome to parDJ
        </h1>
        <div id="my-login-button-target" />
        <p>
          Landing Page
        </p>
      </header>
    );
  }
}
