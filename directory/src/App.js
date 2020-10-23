import React, { Component } from "react";
import "./App.css";
import data from "./data";
import Header from "./components/Header";
import Content from "./components/Content";
import Buttons from "./components/Buttons";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        {
          <div className="Content">
            <Content />
          </div>
          /*<div>
          
        </div> */
        }
      </div>
    );
  }
}

export default App;
