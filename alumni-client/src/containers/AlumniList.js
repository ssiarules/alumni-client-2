import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AlumniList extends Component {

    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }




    render() {
        const { count } = this.state
        return (
            <div>
                <h1>Alumni List: { this.props.alumni.length } </h1>

                { this.props.alumni.map(alumni => (
                    <p key={ alumni.id }>
                        < Link to={ `/alumni/${ alumni.id }` }>{ alumni.name } </Link>,
                        { alumni.yearGraduated },
                        { alumni.college },
                        { alumni.profession },
                        { alumni.sportsPlayedInHighSchool },
                        { alumni.currentlyLiving },
                      { alumni.hobbies }
                        <button onClick={ this.handleClick }> Count { this.state.count } </button>

                    </p>

                )) };
            </div>
        );
    }


}


const mapStateToProps = (state) => {
    return {
        alumni: state
    }
};

export default connect(mapStateToProps)(AlumniList);