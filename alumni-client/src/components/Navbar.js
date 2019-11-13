import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => <nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alumni/new">Create Alumni</Link></li>
        <li><Link to="/alumni">My Alumni</Link></li>

    </ul>
</nav>

export default Navbar