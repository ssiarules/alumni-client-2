import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/buttons/Button'

class AlumniList extends Component {

    state = {
        onlyLA: false 
    };
    

     onHandleClick = (e) => {
         e.preventDefault();
        this.setState({ onlyLA: !this.state.onlyLA})
        
    }
 
    render() {
         const livesInLA = this.state.onlyLA
        let displayAlumni = livesInLA ? this.props.alumni.filter(alumni => alumni.currentlyLiving === 'Los Angeles') : this.props.alumni
     
     return (
             <div> 

              <button onClick={e => this.onHandleClick(e)}> {this.state.onlyLA ? 'All' : 'Only LA'} </button>
              
             
                <h1>Alumni List: { displayAlumni.length }  </h1>

                { displayAlumni.map(alumni => (
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
                       
                ))}
              
         </div>
        )}
         
} 


const mapStateToProps = (state) => {
    
    return {
        alumni: state.alumni
    }
};

export default connect(mapStateToProps)(AlumniList);


