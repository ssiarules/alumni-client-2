import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import NewAlumniForm from "./components/NewAlumniForm";
import AlumniShow from './components/AlumniShow';
import EditAlumni from './components/EditAlumni';
import Navbar from './components/Navbar';
import AlumniList from './containers/AlumniList';
import { connect } from 'react-redux';
import { getAlumni } from './redux/actions/alumni';
import { Login } from './components/login/index';
import USCAlumni from './components/uscAlumni';




class App extends React.Component {

  componentDidMount() {
    this.props.getAlumni();
  }
  render() {
    return (
      <div className="App" >
        <Login />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/alumni" component={ AlumniList } />
            <Route path="/alumni/new" component={ NewAlumniForm } />
            <Route path="/alumni/usc" component={ USCAlumni } />

            <Route exact path="/alumni/:id/edit" component={ EditAlumni } />
            <Route path="/alumni/:id" component={ AlumniShow } />

          </Switch>
        </Router>
      </div >
    );
  }
}
//<Route path="/alumni/schools/:name" component={} />>

export default connect(null,{ getAlumni })(App);
