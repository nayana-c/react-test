import React, { Component } from "react";
import "./App.css";
import Counter from "./counter/counter";
import Main from "./main/main";
import Box from "./box/box" 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
        <Counter />
      </div>
    );
  }
}

export default App;
