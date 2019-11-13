import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledNav = styled.nav`
    li {
        list-style: none; 
    }

    ul {
        display: flex;
        justify-content: space-around;
    }
`;

//list-style removes the bullets 


const Navbar = () => (
    <StyledNav>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/alumni/new">Create Alumni</Link></li>
                <li><Link to="/alumni">My Alumni</Link></li>
            </ul>
        </nav>
    </StyledNav>
);

export default Navbar