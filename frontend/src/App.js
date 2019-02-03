import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Landing from './landing';
import Selection from './page2';
import Create from './create';
import Join from './join'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/" component={Landing}/>
            <Route path="/page2" component={Selection}/>
            <Route path="/create" component={Create}/>
            <Route path="/join" component={Join}/>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
