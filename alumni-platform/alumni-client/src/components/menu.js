//"use strict"

import React, {Component} from 'react'
import {NavLink} from 'react-dom'
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap'

 class Menu extends React.Component{
    render(){
        return(
            <Navbar inverse fixedTop >
  
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"> </Nav>
     < Nav pullRight>
      <Nav.Link href="/alumni/new">Create Alumni </Nav.Link>
        <Nav.Link href="/alumni"> Alumni List
        <Badge> 1 </Badge></Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
 )
 }
}

export default Menu;