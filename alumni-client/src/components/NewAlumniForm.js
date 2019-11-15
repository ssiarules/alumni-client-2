import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { createAlumni } from '../redux/actions/alumni'


class NewAlumniForm extends Component {
    state = {
        name: '',
        yearGraduated: '',
        college: '',
        profession: '',
        sportPlayedInHighschool: '',
        currentlyLiving: '',
        hobbies: '',
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submit = e => {
        e.preventDefault();
        this.props.createAlumni(this.state); //Invoke createAlumni is passing this.state will give me the value of the user data to be saved to the api 
    };

    render() {
        return (
            <div>
                <form onSubmit={ this.submit }>
                    <label> Name: </label>
                    <input onChange={ this.handleChange } required type="text" name="name" value={ this.state.name || '' } />
                    <label> Year Graduated: </label>
                    <input onChange={ this.handleChange } required type="date" name="yearGraduated" value={ this.state.yearGraduated || '' } />
                    <label> College: </label>
                    <input onChange={ this.handleChange } type="text" name="college" value={ this.state.college  || ''} />
                    <label> Profession: </label>
                    <input onChange={ this.handleChange } required type="text" name="profession" value={ this.state.profession || '' } />
                    <label> Sports Played In High School: </label>
                    <input onChange={ this.handleChange } type="text" name="sportPlayedInHighSchool" value={ this.state.sportPlayedInHighSchool || '' } />
                    <label> Currently Living: </label>
                    <input onChange={ this.handleChange } required type="text" name="currentlyLiving" value={ this.state.currentlyLiving  || ''} />
                    <label> Hobbies: </label>
                    <input onChange={ this.handleChange } required type="text" name="hobbies" value={ this.state.hobbies || '' } />

                    <button type="submit"> Create Alumni </button>
                </form>
            </div>
        );
    }
}

export default connect(null,{ createAlumni })(NewAlumniForm);
