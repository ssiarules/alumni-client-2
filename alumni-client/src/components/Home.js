import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {Login } from '../components/login/index';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


function Home() {

    const URL = "/login"
    return (
        <div>
            <h1> Welcome to Irvington High School Alumni Platform!</h1> 

           <Link to={URL}> Login </Link>
           
        
         <hr />  
        <Switch>
             <Route path={'/login'} > < Login /> </Route>
         </Switch>
        </div>
               
    )
}

export default Home;

/* const Home  = () => <h1> Welcome to Irvington High School Alumni Platform!</h1> */
