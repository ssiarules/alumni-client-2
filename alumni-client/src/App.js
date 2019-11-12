import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './components/Home';
import NewAlumniForm from "./components/NewAlumniForm";
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
          <Route exact path="/" component={ Home } />
          <Route exact path="/alumni" component={ AlumniList } />
          <Route path="/alumni/new" component={ NewAlumniForm } />
        </Router>
      </div >
    );
  }
}


export default connect(null,{ getAlumni })(App);
