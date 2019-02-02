import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

export default class Index extends Component {
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



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
