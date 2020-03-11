import React, { Component } from 'react';


class Alumni extends Component {

  handleOnClick() {
    this.props.deleteAlumni(this.props.alumni.id,this.props.history)
  }

  render() {
    const { alumni } = this.props;

    return (
      <div>
        <li>
          {alumni.name}
          <button onClick={() => this.handleOnClick()}> X </button>
        </li>
      </div>
    );
  }
};

export default Alumni;