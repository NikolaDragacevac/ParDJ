import React, { Component } from 'react';
import './Util/main.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Landing from './JS/landing';
import Create from './JS/create';
import loggedInSC from './JS/loggedinSC';
import createVal from './JS/createVal';
import Join from './JS/join';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/loggedinSC" component={loggedInSC}/>
            <Route path="/create" component={Create}/>
            <Route path="/createValidated" component={createVal}/>
            <Route path="/join" component={Join}/>
        </Switch>
      </Router>
    );
  }
}
export default App;
