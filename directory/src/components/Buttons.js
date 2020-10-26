// import React, { Component } from "react";
// import data from "../data";

// class Buttons extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: 1,
//       data,
//     };
//     this.handleInc = this.handleInc.bind(this);
//     this.handleDec = this.handleDec.bind(this);
//     this.deleteInfo = this.deleteInfo.bind(this);
//     this.addInfo = this.addInfo.bind(this);
//     this.editInfo = this.editInfo.bind(this);
//   }

//   handleInc() {
//     let index = this.state.data.findIndex(
//       (person) => person.id === this.state.id
//     );
//     if (index === this.state.data.length - 1) {
//       this.setState({ id: 1 });
//     } else {
//       this.setState({
//         id: this.state.id + 1,
//       });
//     }
//   }

//   handleDec() {
//     let index = this.state.data.findIndex(
//       (person) => person.id === this.state.id
//     );
//     if (index === 0) {
//       this.setState({ id: this.state.data.length });
//     } else {
//       this.setState({
//         id: this.state.id - 1,
//       });
//     }
//   }

//   deleteInfo = (id) => {
//     let index = this.state.data.findIndex((person) => person.id === id);
//     console.log(index, id);
//     let newArr = [...this.state.data];
//     newArr.splice(index, 1);
//     this.setState({
//       data: newArr,
//       id: this.state.data[this.state.data.length - 1].id,
//     });
//   };

//   addInfo(firstName, lastName, city, country, employer, title, favoriteMovies) {
//     let { data } = this.state;
//     let id = data[data.length - 1].id + 1;
//     let newInfo = {
//       id,
//       name: { first: firstName, last: lastName },
//       city,
//       country,
//       employer,
//       title,
//       favoriteMovies,
//     };
//     let newArr = [...data, newInfo];
//     this.setState({
//       data: newArr,
//     });
//   }

//   editInfo() {}
//   render() {
//     let {data, id} = this.state
//     let index = data.findIndex((person) => person.id === id)
//     if (index === -1) {
//       this.setState({id: data[0].id})
//     }
//     return (
//         <div className={"Buttons"}>
//         <button className={"Button"} onClick={this.handleDec}>
//           &lt; Previous
//         </button>
//         <div className={"Buttons"}>
//           <button className={"FuncButtons"}>Edit</button>
//           <button className={"FuncButtons"} onClick={() => {
//             this.deleteInfo(id)
//           }}>Delete</button>
//           <button className={"FuncButtons"}>New</button>
//         </div>
//         <button className={"Button"} onClick={this.handleInc}>
//           Next &gt;
//         </button>
//       </div>
//     );
//   }
// }

// export default Buttons;
