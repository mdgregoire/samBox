import React, { Component } from 'react';
import PlanetList from '../../components/planet_list/planet_list'
import AddPlanet from '../../components/add_planet/add_planet'

class Planets extends Component {

constructor(props) {
  super(props);
  this.state = {

    newPlanet: {
      p_name: '',
      size: '',
    },
    planetsArray: [],
  }
}

handleChangeFor = (propertyName) => (event) => {
  this.setState(
    {
      newPlanet: {
        ...this.state.newPlanet,
        [propertyName]: event.target.value
      }
    }
  )
}

handlePlanetSubmit = (event) => {
  console.log(this.state.newPlanet, 'newplanet');
  event.preventDefault();
  this.setState(
    {
      planetsArray: [...this.state.planetsArray, this.state.newPlanet],
      newPlanet: {
        p_name: '',
        size: '',
      }
    }
  )
  console.log('Submit', this.state.planetsArray);

}

  render() {
    return (
      <div className="Planets">
        <h2>PLANETS!!!</h2>
        <AddPlanet newPlanet={this.state.newPlanet} handleChangeFor={this.handleChangeFor} handlePlanetSubmit={this.handlePlanetSubmit}/>
        <PlanetList planetsArray={this.state.planetsArray}/>
      </div>
    );
  }

}//end class

export default Planets;
