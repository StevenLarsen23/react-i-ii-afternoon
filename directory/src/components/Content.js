import React, { Component } from "react";
import data from "../data";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
    this.handleInc = this.handleInc.bind(this);
  }

  handleInc() {
    this.setState({
      id: this.state.id + 1,
    //   if(this.state.id === 0)
        
    });
  }

  handleDec() {
    this.setState({
      id: this.state.id - 1,
    });
  }
  render() {
    return (
      <div className={"Main"}>
        <h1 Text style={{ textDecorationLine: "underline" }}>
          {data[this.state.id].name.first} {data[this.state.id].name.last}
        </h1>
        <p>
          <strong>From: </strong>
          {data[this.state.id].city}, {data[this.state.id].country}
        </p>
        <p>
          <strong>Job Title: </strong>
          {data[this.state.id].title}
        </p>
        <p>
          <strong>Employer: </strong>
          {data[this.state.id].employer}
        </p>
        <br></br>
        <p>
          <strong>Favorite Movies:</strong>
        </p>
        <ol>
          <li className={"List"}>{data[this.state.id].favoriteMovies[0]}</li>
          <li className={"List"}>{data[this.state.id].favoriteMovies[1]}</li>
          <li className={"List"}>{data[this.state.id].favoriteMovies[2]}</li>
        </ol>
        <button className={"Button"} onClick={this.handleDec}>
          Previous
        </button>
        <button className={"Button"} onClick={this.handleInc}>
          Next
        </button>
      </div>
    );
  }
}

export default Content;
