//"use strict"
import {NavLink} from 'react-dom'
import React from 'react'
import { Nav, NavItem, Navbar, Badge} from 'react-bootstrap'


export class NavbarMenu extends React.Component{
    render(){
        return(
<Navbar inverse fixedTop bg="light" expand="lg">
<Navbar.Header>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
 <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     
    </Nav>
    
        
    </Nav>
</Navbar.Collapse>
  </Navbar.Header>
</Navbar>
        );
    }
}

export default NavbarMenu;

/*
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
*/