import React,{ Component } from 'react'
import { getAlumni } from '../redux/actions/alumni'
import { connect } from 'react-redux'

class AlumniList extends Component {

    componentDidMount() {
        this.props.getAlumni()
    }


    render() {
        return (
            <div>
                <h1>Alumni List</h1>
            </div>
        )
    }
}

export default connect(null,{ getAlumni })(AlumniList);