import React, {Component} from 'react';

class Buttons extends Component {
    constructor(){
        super();
        this.state = {
            id: 0,
        };
        this.handleInc = this.handleInc.bind(this);
        this.handleDec = this.handleDec.bind(this);
    }

    handleInc() {
        this.setState({
          id: this.state.id + 1,
        //   if(this.state.id = 25) {
        //       this.state.id + 0
        //   }
            
        });
      }
    
      handleDec() {
        this.setState({
          id: this.state.id - 1,
        });
      }
      render(){
          return (
              <div>
            <button className={"Button"} onClick={this.handleDec}>
            Previous
          </button>
          <button className={"Button"} onClick={this.handleInc}>
            Next
          </button>
          </div>
          )
      }
}

export default Buttons