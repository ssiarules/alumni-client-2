import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './components/Home';
import NewAlumniForm from "./components/NewAlumniForm";
import AlumniList from './containers/AlumniList';

class App extends React.Component {
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


export default App;
