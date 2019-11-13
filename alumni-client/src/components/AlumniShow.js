import React from 'react'
import { connect } from 'react-redux';

function AlumniShow(props) {
    if (!props.found) {
        return <p>No Alumni...</ p>
    }
    return (
        <div>
            <h1> Alumni Info</h1>
            <p>{ props.alumni.name } ,
             { props.alumni.yearGraduated } ,
             { props.alumni.profession },
             { props.alumni.college },
             { props.alumni.sportPlayedInHighSchool } ,
             { props.alumni.currentlyLiving },
             { props.alumni.hobbies }
            </p>
        </div>
    )
};

const mapStateToProps = (state,props) => {
    const id = props.match.params.id;
    const alumni = state.filter(alumni => alumni.id == id)[0];
    const found = !!alumni;
    return {
        alumni,
        found
    };

};

export default connect(mapStateToProps)(AlumniShow);