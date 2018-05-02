import React, { Component } from 'react';
import './App.css';
import Header from '../header/header'
import Stars from '../../pages/stars/Stars'
import Planets from '../../pages/planets/Planets'
// import PlanetList from '../planet_list/planet_list'
// import AddPlanet from '../add_planet/add_planet'

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

constructor(props) {
  super(props);
}

  render() {
    return (
      <Router>
        <div className="App">
          <Header title="Gacrux_React_Astro"/>
          <ul>
            <li>
              <Link to="/stars">Stars</Link>
            </li>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
          </ul>
          <Route path="/stars" component={Stars}/>
          <Route path="/planets" component={Planets}/>
        </div>
      </Router>
    );
  }

}//end class

export default App;
