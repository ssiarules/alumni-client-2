import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './components/Home';
import AlumniList from './containers/AlumniList';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Route exact path="/" component={ Home } />
          <Route exact path="/alumni" component={ AlumniList } />
        </Router>
      </div>
    );
  }
}


export default App;
