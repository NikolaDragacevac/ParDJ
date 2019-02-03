import React, { Component } from 'react';
import '../Util/main.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Join extends Component{
  render(){
    return (
      <header className="App-header">
        <h1>
          Enter the room number
        </h1>
          <input type="text" id="roomnumber"/>
          <button class = "button button3">Submit</button>
      </header>
    );
  }
}
