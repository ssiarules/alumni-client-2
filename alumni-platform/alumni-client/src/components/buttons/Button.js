
import React, { Component } from 'react';


class Button extends Component {

   constructor () {
        super()
        this.state = {
           count: 0
        }
       // this.decreaseHandleClick = this.decreaseHandleClick.bind(this)
         this.increaseHandleClick  = this.increaseHandleClick.bind(this)
    }

    increaseHandleClick(){
        this.setState({ count: this.state.count + 1 })
    }

    decreaseHandleClick = () => {
        this.setState({ count: this.state.count - 1 })
    }


  render() {
   //const { increaseCount} = this.state
   // const { decreaseCount} = this.state
    const { count} = this.state

    return (
      <div>
        <p> {count} </p>
          <button onClick={this.increaseHandleClick}> + </button>
          <button onClick={this.decreaseHandleClick}> - </button>
       
      </div>
    );
  }
};

export default Button;