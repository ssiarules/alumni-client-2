import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/buttons/Button'

class AlumniList extends Component {

    render() {
        
        return (
            <div> 
                <h1>Alumni List: { this.props.alumni.length }  </h1>

                { this.props.alumni.map(alumni => (
                    <p key={ alumni.id }>
                        < Link to={ `/alumni/${ alumni.id }` }>{ alumni.name } </Link>,
                        { alumni.yearGraduated },
                        { alumni.college },
                        { alumni.profession },
                        { alumni.sportsPlayedInHighSchool },
                        { alumni.currentlyLiving },
                      { alumni.hobbies }

                       <div> < Button /> </div>
                        
                    </p>

                      

                )) };
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    
    return {
        alumni: state.alumni
    }
};

export default connect(mapStateToProps)(AlumniList);

                        