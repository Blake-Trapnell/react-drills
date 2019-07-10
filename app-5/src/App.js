import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./component/Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image source = {"https://i.chzbgr.com/full/9195092480/h7D7C3065/"} />
      </div>
    );
  }
}

export default App;
