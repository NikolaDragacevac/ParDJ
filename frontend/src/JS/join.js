import React, { Component } from 'react';
import '../Util/main.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
var request = require('superagent');

export default class Join extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {error: ''};
    this.state = {test: ''};
    this.state = {test2: ''};
    this.state = {data: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if(("::ffff:" + this.state.value) === this.state.test)
    {

    }
    else
    {
      this.setState({error: "Not a valid room number ID"});
    }
    event.preventDefault();
  }

  async componentDidMount(){
    const check = await this.postThingy();
    console.log(check);
    // request.post('http://localhost:3001/').set("Host", "fuck me").send( "Kill me if this works!");
    this.setState({test: check.body});
  }

  async postThingy() {
    return fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: 'this is a post req from the frontend'
    }).then(response => response.json());
  }

  POSTrequest(){
    this.setState({data: "Receivingsss:"});
    var that = this;
    fetch('http://localhost:3001/', {method:'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},body: 'this is a post req from the frontend'})
    .then(function(res){
      this.setState({test2: "Receiving:" + res.body});
    })
  }

  fieldCheck(){
    this.POSTrequest();
  }

  render(){
    return (
      <header className="App-header">
        <h1>
          Enter the room number
        </h1>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="connect" className="button button3"/>
          <br />
          {this.state.error}
          {this.state.test}
          {this.state.test2}
          {this.state.data}
           <input type="button" name="submit" value="Submit" onClick={() => this.fieldCheck()}/>
        </form>
      </header>
    );
  }
}
