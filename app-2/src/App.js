import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
constructor() {
  super()
  this.state = {
    list: ``,
    array: []
  }
}
addToList(list) {
  let newArray = [...this.state.array]
  newArray.push(list)
  this.setState({
    array: newArray
  })
}
handleChange(e) {
  this.setState({
    list: e.target.value})}
    clear() {
      this.setState({
        array: []
      })
    }

  render() {
    return (
      <div className="App">
       <input onChange={e => {this.handleChange(e)}}/>
       <button onClick={()=> this.addToList(this.state.list)}>Add To List</button>
       <button onClick ={()=> this.clear()}>Clear</button>
       <h4>{this.state.array.map(e => <h4>{e}</h4>)}</h4>
      </div>
    );
  }
}


