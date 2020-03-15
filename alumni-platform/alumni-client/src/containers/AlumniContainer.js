import React, { Component } from 'react';

import NewAlumniForm from '../components/NewAlumniForm';
import Alumnus from '../components/alumnus';


import { connect } from 'react-redux'

class AlumniContainer extends Component {

  render() {
    return (
      <div>
        <NewAlumniForm createAlumni={this.props.addAlumni}/>
        <alumnus alumni={this.props.alumni} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        alumni: state.alumni
    }
};

const mapDispatchToProps = dispatch => ({
    createAlumni: state => dispatch({ type: 'ALUMNI_CREATE_SUCCESS', state }),
    deleteAlumni: id => dispatch({type:"ALUMNI_DELETE_SUCCESS", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(AlumniContainer)
