import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
constructor() {
super()
this.state = {
  input: '',
}
}
handleChange(e){
  this.setState({
    input: e.target.value})}
    
    render() {
      return (
        <div className="App">
          <input onChange={e => {this.handleChange(e)}}/>
          <h4>{this.state.input}</h4>
        </div>
      );
    }

    
}
