import React, { Component } from 'react';

class PlanetList extends Component {


  render() {
    return (
      <section>
        <h2> Planet List </h2>
        <ul>
          {this.props.planetsArray.map( (planet) => <li key={planet.p_name}>{planet.p_name}</li>)}
        </ul>
      </section>
    );
  }
}

export default PlanetList;
