import React,{ Component } from 'react'
import { getAlumni } from '../redux/actions/alumni'
import { connect } from 'react-redux'

class AlumniList extends Component {

    componentDidMount() {
        this.props.getAlumni();
    }


    render() {
        return (
            <div>
                <h1>Alumni List</h1>
                { this.props.alumni.map(alumni =>
                    <p> { alumni.name }</p>
                ) };
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alumni: state
    }
}

export default connect(mapStateToProps,{ getAlumni })(AlumniList);