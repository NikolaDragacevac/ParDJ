import React, { Component } from 'react';
import '../Util/main.css';

export default class Landing extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>
          welcome to parDJ
        </h1>
        <div id="my-login-button-target" />
        <p>
          Login with Snapchat to begin
        </p>
      </header>
    );
  }
}
