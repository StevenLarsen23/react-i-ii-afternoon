import React, { Component } from "react";
import data from "../data";
// import Buttons from './Buttons'
// import Index from "./components/Index";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      data,
    };
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
    this.deleteInfo = this.deleteInfo.bind(this);
    this.addInfo = this.addInfo.bind(this);
    this.editInfo = this.editInfo.bind(this);
  }

  handleInc() {
    let {data, id} = this.state;
    let index = data.findIndex((person) => person.id === id)
    if (index === data.length - 1) {
      this.setState({ id: 1 });
    } else {
      this.setState({
        id: id + 1,
      });
    }
  }

  handleDec() {
    let {data, id} = this.state;
    let index = data.findIndex((person) => person.id === id)
    if (index === 0) {
      this.setState({ id: data.length });
    } else {
      this.setState({
        id: id - 1,
      });
    }
  }

  deleteInfo = (id) => {
    let {data} = this.state;
    let index = data.findIndex((person) => person.id === id)
    console.log(index, id)
    let newArr = [...data];
    newArr.splice(index, 1);
    this.setState({
      data: newArr,
      id: data[data.length -1].id,
    })
  }

  addInfo(firstName, lastName, city, country, employer, title, favoriteMovies){
    let {data} = this.state
    let id = data[data.length -1].id + 1
    let newInfo = {
      id,
      name: {
        first: firstName, 
        last: lastName},
      city,
      country,
      employer,
      title,
      favoriteMovies,
    };
    let newArr = [...data, newInfo]
    this.setState({
      data: newArr
    });
  }

  editInfo(){

  }

  render() {
    let {data, id} = this.state
    let index = this.state.data.findIndex((person) => person.id === this.state.id)
    if (index === -1) {
      this.setState({id: this.state.data[0].id})
    }
    return (
      <div className={"Window"}>
        <div className={"Main"}>
          <h2 className={"Index"}>
            {id}/{data.length}
          </h2>
          <h1>
            {data[index].name.first} {data[index].name.last}
          </h1>
          <p>
            <strong>From: </strong>
            {data[index].city}, {data[index].country}
          </p>
          <p>
            <strong>Job Title: </strong>
            {data[index].title}
          </p>
          <p>
            <strong>Employer: </strong>
            {data[index].employer}
          </p>
          <br></br>
          <p>
            <strong>Favorite Movies:</strong>
          </p>
          <ol>
            <li className={"List"}>{data[index].favoriteMovies[0]}</li>
            <li className={"List"}>{data[index].favoriteMovies[1]}</li>
            <li className={"List"}>{data[index].favoriteMovies[2]}</li>
          </ol>
        </div>
        <div className={"Buttons"}>
          <button className={"Button"} onClick={this.handleDec}>
            &lt; Previous
          </button>
          <div className={"Buttons"}>
            <button className={"FuncButtons"}>Edit</button>
            <button className={"FuncButtons"} onClick={() => {
              this.deleteInfo(id)
            }}>Delete</button>
            <button className={"FuncButtons"}>New</button>
          </div>
          <button className={"Button"} onClick={this.handleInc}>
            Next &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default Content;
