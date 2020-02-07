import React from 'react'
import { NavLink } from 'react-router-dom'
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
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/alumni/new">Create Alumni</NavLink></li>
                <li><NavLink to="/alumni">My Alumni</NavLink></li>
            </ul>
        </nav>
    </StyledNav>
);

export default Navbar