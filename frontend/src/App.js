import React, { Component } from 'react';
import './Util/main.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Landing from './JS/landing';
import Selection from './JS/loggedin';
import loggedInVal from './JS/loggedinval';
import Create from './JS/create';
import Join from './JS/join';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/loggedin" component={Selection}/>
            <Route path="/join" component={Join}/>
            <Route path="/create" component={Create}/>
            <Route path="/createValidated" component={loggedInVal}/>
        </Switch>
      </Router>
    );
  }
}
export default App;