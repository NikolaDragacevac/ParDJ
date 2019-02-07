import React, { Component } from 'react';
import '../Util/main.css';
var request = require('superagent');

export default class Join extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {error: ''};
    this.state = {test: ''};

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
    const check2 = await request.get('http://localhost:3001');
    this.setState({test: JSON.stringify(check2.text)});
  }

  POSTrequest(){
    this.setState({data: "Receivings:"});
    // var that = this;
    fetch('http://localhost:3001/', {method:'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},body: 'this is a post req from the frontend'})
    .then(function(res){
      this.setState({test2: "Receiving:" + res.body});
    })
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
          <input type="submit" name="submit" value="Submit" onClick={() => this.POSTrequest()}/>
        </form>
      </header>
    );
  }
}
