import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import NewAlumniForm from "./components/NewAlumniForm";
import AlumniShow from './components/AlumniShow';
import EditAlumni from './components/EditAlumni';
import Menu from './components/menu'
//import {Navbar} from './components/Navbar';
import AlumniList from './containers/AlumniList';
import { connect } from 'react-redux';
import { getAlumni } from './redux/actions/alumni';
import AlumniContainer from './containers/AlumniContainer'
//import {Login } from './components/login/index';
import USCAlumni from './components/uscAlumni';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: "Not Logged In!", 
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this)

  }

  handleLogin(data){
    this.setState({
      loggedInStatus: 'You Are Now Logged In!',
      user: data.user
    })
  }

  componentDidMount() {
    this.props.getAlumni();
  }
  render() {
    return (
      <div className="App" >
        <Router>
        <Menu />
          <Switch>
            
            <Route exact path="/alumni" component={ AlumniList } />
             <Route path="/alumni/new" render={ props => (< NewAlumniForm {...props} loggedInStatus={this.state.loggedInStatus} /> )} />
            { /* <Route path="/alumni/new" component={ NewAlumniForm} /> */}
           { /* <Route path="/alumni/usc" component={ USCAlumni } /> */}
            <Route exact path="/alumni/:id/edit" component={ EditAlumni } />
            <Route path="/alumni/:id" component={ AlumniShow } />
             <Route path="/" render={ props => ( <Home { ...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} /> )} />
          {/* <Route path="/" component={ Home } /> */}

          

       </Switch>
      
        </Router>
      </div >
    );
  }
}
//<Route path="/alumni/schools/:name" component={} />>

export default connect(null,{ getAlumni })(App);
