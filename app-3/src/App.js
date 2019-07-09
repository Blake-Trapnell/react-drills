import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state ={
      input: '',
      foodlist: ['spaghetti', 'icecream', 'sushi', 'bologna', 'cheese'],
      searchedFoodlist: []
    }
    
  }
  handleChange(e) {
    this.setState({
    input: e.target.value})}
  
  render() {
    return (
      <div className="App">
        <input onChange={e => {this.handleChange(e)}} />
        <h4>{this.state.foodlist.filter((e)=> e.includes(this.state.input)).map(e => <h4>{e}</h4>)}</h4>
      </div>
    );
  }
}

export default App;
