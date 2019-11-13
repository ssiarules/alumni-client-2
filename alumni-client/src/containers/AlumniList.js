import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AlumniList extends Component {
    render() {
        return (
            <div>
                <h1>Alumni List</h1>
                { this.props.alumni.map(alumni => (
                    <p key={ alumni.id }>
                        < Link to={ `/alumni/${ alumni.id }` }>{ alumni.name } </Link>,
                        { alumni.yearGraduated },
                        { alumni.college },
                        { alumni.profession },
                        { alumni.sportsPlayedInHighSchool },
                        { alumni.currentlyLiving },
                        { alumni.hobbies }
                    </p>
                )) };
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