import React, { Component } from "react";
import "./App.css";
// import data from "./data";
import Header from "./components/Header";
import Content from "./components/Content";
// import Buttons from "./components/Buttons";
// import Index from "./components/Index";

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
          <div className="Content">
            <Content />
            {/* <Buttons /> */}
          </div>
        
      </div>
    );
  }
}

export default App;
