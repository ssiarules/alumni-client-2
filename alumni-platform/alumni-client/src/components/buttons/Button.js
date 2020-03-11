
import React, { Component } from 'react';


class Button extends Component {

   constructor () {
        super()
        this.state = {
            increaseCount: 0,
            decreaseCount: 99
        }
        this.decreaseHandleClick = this.decreaseHandleClick.bind(this)
         this.increaseHandleClick  = this.increaseHandleClick.bind(this)
    }

    increaseHandleClick = () => {
        this.setState({ increaseCount: this.state.increaseCount + 1 })
    }

    decreaseHandleClick = () => {
        this.setState({ decreaseCount: this.state.decreaseCount - 1 })
    }


  render() {
   const { increaseCount} = this.state
    const { decreaseCount} = this.state

    return (
      <div>
        
          <button onClick={this.increaseHandleClick}> {increaseCount} </button>
          <button onClick={this.decreaseHandleClick}> {decreaseCount} </button>
       
      </div>
    );
  }
};

export default Button;