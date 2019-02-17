import React, { Component } from 'react';
import '../Util/main.css';
import { isUndefined } from 'util';
var request = require('superagent');

export default class Join extends Component{
  constructor(props) {
    super(props);
    this.state = {login: ''};
    this.state = {password: ''};
    this.state = {error: ''};

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLogin(event) {
    this.setState({login: event.target.value});
  }

  handleChangePass(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  valSearch(){
    if(isUndefined(this.state.login)||isUndefined(this.state.password)){
      this.setState({error: "Please enter a login or password"});
    }
    else
    {
      this.search()
    }
  }

  search(){
    request.post('http://localhost:3001/roomLogin')
      .type('application/json')
      .send({login: "" + this.state.login, password: "" + this.state.password})
      .then((res) => {
        if(res.text == "true")
        {
          this.props.history.push("works");
        }
        else
        {
          this.setState({error: "Incorrect login or password"});
        }
      }).catch((err) => {
        this.setState({error: "OwO Something went vewy wong, I'm sowwy"});
      });
  }

  render(){
    return (
      <header className="App-header" onsubmit={this.handleSubmit}>
        <h1>
          Enter the room number
        </h1>
        <input type="text" value={this.state.login} onChange={this.handleChangeLogin}/>
        <input type="password" value={this.state.password} onChange={this.handleChangePass}/>
        <br />
        <input 
            type="submit"
            value="Sign in" 
            className="button button3"
            onClick={() => this.valSearch()}
        />
        <br />
        {this.state.error}
      </header>
    );
  }
}
