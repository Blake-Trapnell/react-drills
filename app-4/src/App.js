import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: '',
    }

  }
  handleUserName(e) {
    this.setState({
    userName: e.target.value})}

    handlePassword(e) {
      this.setState({
      password: e.target.value})}
  
  userNameMessage() {
    alert(`Your username is ${this.state.userName} and your password is ${this.state.password}`)
    
  }

  render() {
    return (
      <div className="App">
      <input type="text" onChange={e => {this.handleUserName(e)}} />
      <input type="text" onChange={e => {this.handlePassword(e)}} />
      <button onClick={e=> {this.userNameMessage(e)}} >Login</button>
      </div>
    );
  }
}

export default App;
