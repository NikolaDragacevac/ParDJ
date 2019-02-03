import React, { Component } from 'react';
import './main.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Landing from './landing';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/" component={Landing}/>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default App;