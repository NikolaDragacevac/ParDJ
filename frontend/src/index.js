import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

export default class Index extends Component {
  render() {
    return (
      <div/>
    );
  }
}

serviceWorker.unregister();
