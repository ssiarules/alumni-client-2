import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { createAlumni } from '../redux/actions/alumni';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../components/login/styles.css';

class NewAlumniForm extends Component {

    constructor(props){
        super(props);
    
    }
   state = {
        name: '',
        yearGraduated: '',
        college: '',
        profession: '',
        sportPlayedInHighschool: '',
        currentlyLiving: '',
        hobbies: '',
    };
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submit = e => {
        e.preventDefault();
        this.props.createAlumni(this.state, this.props.history); //Invoke createAlumni is passing this.state will give me the value of the user data to be saved to the api 
       
    };

    render(){
        return(
        
<div>
    <ul> 
    <form onSubmit={this.submit}>
    
    <h1> New Alumni </h1>

     <h2> Status:{this.props.loggedInStatus} </h2> 
<li>
    <label> Name:</label>
    <input onChange={ this.handleChange } required type="text" name="name" defaultValue={ this.state.name || '' } /> 
   </li>

 <li>
   <label> Year Graduated:</label>
    <input onChange={ this.handleChange } required type="date" name="yearGraduated" defaultValue={ this.state.yearGraduated || '' } />
  </li>

 <li>
   <label> College: </label>
    <input onChange={ this.handleChange } required type="text" name="college" defaultValue={ this.state.college || '' } />
  </li>

 <li> 
   <label>Profession: </label>
    <input onChange={ this.handleChange } required type="text" name="profession" defaultValue={ this.state.profession || '' } />
  </li>

 <li>
   <label> Sports Played In High School: </label>
    <input onChange={ this.handleChange } type="text" name="sportPlayedInHighSchool" defaultValue={ this.state.sportPlayedInHighSchool || '' } />
  </li>

 <li>
   <label> Currently Living: </label>
     <input onChange={ this.handleChange } required type="text" name="currentlyLiving" defaultValue={ this.state.currentlyLiving || '' } />
 </li>

 <li>
   <label> Hobbies: </label>
    <input onChange={ this.handleChange } required type="text" name="hobbies" defaultValue={ this.state.hobbies || '' } />
  </li>
   
  
  <Button variant="primary" type="submit">
    Create Alumni
  </Button>
</form>

</ul>
</div>
            
           
        )
    }
}

export default connect(null, {createAlumni} )(NewAlumniForm);




