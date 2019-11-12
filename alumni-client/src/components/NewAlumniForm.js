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

    render() {
        return (
            <div>
                <form>
                    <label> Name: </label>
                    <input required type="text" name="name" value={ this.state.name } />;
                <label> Year Graduated: </label>
                    <input required type="number" name="yearGraduated" defaultValue={ this.state.yearGraduated } />
                    <label> College: </label>
                    <input type="text" name="college" defaultValue={ this.state.college } />
                    <label> Profession: </label>
                    <input required type="text" name="profession" defaultValue={ this.state.profession } />
                    <label> Sports Played In High School: </label>
                    <input type="text" name="sportPlayedInHighSchool" defaultValue={ this.state.sportPlayedInHighschool } />
                    <label> Currently Living: </label>
                    <input required type="text" name="currentlyLiving" defaultValue={ this.state.currentlyliving } />
                    <label> Hobbies: </label>
                    <input required type="text" name="hobbies" defaultValue={ this.state.hobbies } />

                    <button type="submit"> Create Alumni </button>
                </form>
            </div>
        );
    }
}

export default connect(null,{ createAlumni })(NewAlumniForm);
