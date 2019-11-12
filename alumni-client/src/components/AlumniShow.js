import React,{ Component } from 'react'
import { connect } from 'react-redux';

class AlumniShow extends Component {
    render() {
        return (
            <div>
                <h1> Alumni Info</h1>
                { props.alumni.name }
            </div>
        )
    };
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id;
    const alumni = state.filter(alumni => alumni.id == id);
    console.log(props)

    return {
        alumni
    }

};

export default connect(mapStateToProps)(AlumniShow);