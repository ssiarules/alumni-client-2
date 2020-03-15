import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { deleteAlumni } from '../redux/actions/alumni';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledButton = styled.button`
    background-color: blue;
    padding: 15px;
    border-radius: 5px;
    color: white;
`;

class AlumniShow extends Component {

    delete = () => {
        this.props.deleteAlumni(this.props.alumni.id,this.props.history);
    };

    render() {
       
            const { alumni,found } = this.props
        if (!found) {
            return <p>No Alumni...</ p>
        } 
            
        
        return (
            <div>
                <h1> Alumni Info</h1>
                <p> { alumni.name } </p>
                <p> { alumni.yearGraduated } </p>
                <p> { alumni.profession } </p>
                <p> { alumni.college }</p>
                <p> { alumni.sportPlayedInHighSchool }</p>
                <p> { alumni.currentlyLiving }</p>
                <p> { alumni.hobbies }</p>
                <StyledButton onClick={ this.delete }>
                    <strong> Delete </strong>
                </StyledButton>
                <Link to={ `/alumni/${ alumni.id }/edit` } >
                    <StyledButton onClick={ this.update }>
                        <strong> Edit </strong>
                    </StyledButton>
                </Link>

            </div >
        )
    };
};
//The reason we need access to props is because one of the props is the ID based App.js routes  
const mapStateToProps = (state,props) => {
    //debugger
    const id = props.match.params.id;
    const alumni = state.alumni.filter(alumni => alumni.id == id)[0];
    const found = !!alumni;

    //const found = Object.keys(alumni).length > 1;
    return {
        alumni,
        found
    };

};

export default connect(mapStateToProps,{ deleteAlumni })(AlumniShow);