import React,{ Component } from 'react'
import { connect } from 'react-redux'

class AlumniList extends Component {




    render() {
        return (
            <div>
                <h1>Alumni List</h1>
                { this.props.alumni.map(alumni =>
                    <p>
                        { alumni.name },
                        { alumni.yearGraduated },
                        { alumni.college },
                        { alumni.profession },
                        { alumni.sportsPlayedInHighSchool },
                        { alumni.currentlyLiving },
                        { alumni.hobbies }
                    </p>
                )
                };
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alumni: state
    }
}

export default connect(mapStateToProps)(AlumniList);