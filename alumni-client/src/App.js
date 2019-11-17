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


class App extends React.Component {

  componentDidMount() {
    this.props.getAlumni();
  }
  render() {
    return (
      <div className="App" >
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/alumni" component={ AlumniList } />
            <Route path="/alumni/new" component={ NewAlumniForm } />
            <Route exact path="/alumni/:id/edit" component={ EditAlumni } />
            <Route path="/alumni/:id" component={ AlumniShow } />
          </Switch>
        </Router>
      </div >
    );
  }
}


export default connect(null,{ getAlumni })(App);
