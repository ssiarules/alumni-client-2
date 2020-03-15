import React, {Component} from 'react'
import { NavLink, Link } from 'react-router-dom'
import {Login, Signup } from '../components/login/index';
import LoginFacebook from '../components/login/Facebook'



import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

export class Home extends Component {

constructor(props){
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
}


handleSuccessfulAuth = data => {
    debugger
    //update parent component 
    //redirect the user 
    this.props.handleLogin(data)
    this.props.history.push('/alumni/new')
}

render() {

 const URL = "/login"
    
const signupURL = "/signup"


    return (
        <div>
            <h1> Welcome to Irvington High School Alumni Platform!</h1> 
                <h2> Status: {this.props.loggedInStatus}</h2>

           <Link to={ URL} handleSuccessfulAuth={this.handleSuccessfulAuth}> Login </Link>
             
            <Link to={signupURL} handleSuccessfulAuth={this.handleSuccessfulAuth}> Signup </Link>
           
            <hr /> 

          <LoginFacebook />
        
        <Switch>
             <Route path={'/login'} handleSuccessfulAuth={this.handleSuccessfulAuth}> < Login /> </Route>
             <Route path={'/signup'} handleSuccessfulAuth={this.handleSuccessfulAuth}> < Signup /> </Route>
         </Switch>
        </div>

    )
}

}

/*
function Home() {
   
    const URL = "/login"
    
    const signupURL = "/signup"

    return (
        <div>
            <h1> Welcome to Irvington High School Alumni Platform!</h1> 

           <Link to={URL}> Login </Link>
             
            <Link to={signupURL}> Signup </Link>
            <hr /> 
       
        
        <Switch>

             <Route path={'/login'} > < Login /> </Route>
             <Route path={'/signup'} > < Signup /> </Route>
            
  
         </Switch>
        </div>
               
    )
}
*/

export default Home;

/* const Home  = () => <h1> Welcome to Irvington High School Alumni Platform!</h1> */
