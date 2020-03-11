import React,{ Component } from 'react';
import alumni from './alumni'


  class Alumnus extends Component {
  render() {
    console.log(this.props)
    const { alumni, deleteAlumni } = this.props
    const alumniList = alumni.map(alumni => {

      return(
        <alumni key={alumni.id}
          alumni={alumni}
          deleteAlumni={deleteAlumni}
        />
      );
    })
    return(
      <ul>
        {alumniList}
      </ul>
    );
  }
};

export default Alumnus;