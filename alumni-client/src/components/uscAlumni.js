import React,{ Component } from 'react'
import { connect } from 'react-redux'

class uscAlumni extends Component {
    render() {
        console.log(this.props.students)
        return (
            <>
                <h1> USC Alumni </h1>
            </>
        )
    }
}

const mapStateToProps = state => {
    const students = state.filter(alumni => alumni.college === 'USC')

    return { students: students }
}

export default connect(mapStateToProps)(uscAlumni)


//we want this component to connect to the store and only "grab" students that went to USC