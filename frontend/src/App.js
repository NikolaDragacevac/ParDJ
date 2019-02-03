import React, { Component } from 'react';
import './Util/main.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Landing from './JS/landing';
import Selection from './JS/loggedin';
import Create from './JS/create';
import Join from './JS/join';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/loggedin" component={Selection}/>
            <Route path="/create" component={Create}/>
            <Route path="/join" component={Join}/>
        </Switch>
      </Router>
    );
  }
}
export default App;