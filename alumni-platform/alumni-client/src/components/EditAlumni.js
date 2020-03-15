import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { updateAlumni } from '../redux/actions/alumni'



class EditAlumni extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: props.alumni.name,
            yearGraduated: props.alumni.yearGraduated,
            college: props.alumni.college,
            profession: props.alumni.profession,
            sportPlayedInHighSchool: props.alumni.sportPlayedInHighSchool,
            currentlyLiving: props.alumni.currentlyLiving,
            hobbies: props.alumni.hobbies,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.alumni.name !== this.props.alumni.name) {

            this.setState({
                name: this.props.alumni.name,
                yearGraduated: this.props.alumni.yearGraduated,
                college: this.props.alumni.college,
                profession: this.props.alumni.profession,
                sportPlayedInHighSchool: this.props.alumni.sportPlayedInHighSchool,
                currentlyLiving: this.props.alumni.currentlyLiving,
                hobbies: this.props.alumni.hobbies,
            });
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    update = e => {
        e.preventDefault();
        debugger
        this.props.updateAlumni(this.state,this.props.alumni.id,this.props.history);
    };

    render() {
        return (
            <div>
                <form onSubmit={ this.update }>
                    <label> Name: </label>
                    <input onChange={ this.handleChange } required type="text" name="name" value={ this.state.name || '' } />
                    <label> Year Graduated: </label>
                    <input onChange={ this.handleChange } required type="date" name="yearGraduated" value={ this.state.yearGraduated || '' } />
                    <label> College: </label>
                    <input onChange={ this.handleChange } type="text" name="college" value={ this.state.college || '' } />
                    <label> Profession: </label>
                    <input onChange={ this.handleChange } required type="text" name="profession" value={ this.state.profession || '' } />
                    <label> Sports Played In High School: </label>
                    <input onChange={ this.handleChange } type="text" name="sportPlayedInHighSchool" value={ this.state.sportPlayedInHighSchool || '' } />
                    <label> Currently Living: </label>
                    <input onChange={ this.handleChange } required type="text" name="currentlyLiving" value={ this.state.currentlyLiving || '' } />
                    <label> Hobbies: </label>
                    <input onChange={ this.handleChange } required type="text" name="hobbies" value={ this.state.hobbies || '' } />

                    <button type="submit"> Update Alumni </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id;
    const alumni = state.alumni.filter(alumni => alumni.id == id)[0] || {};
    return {
        alumni,
    };
};

export default connect(mapStateToProps,{ updateAlumni })(EditAlumni);
