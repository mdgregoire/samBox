import React, { Component } from 'react';

class AddPlanet extends Component {

  render() {
    return (
      <section>
        <h2>Add Planet</h2>
        <form>
          <input onChange={this.props.handleChangeFor('p_name')}
            value={this.props.newPlanet.p_name}
            type="text" placeholder="name"/>
          <input onChange={this.props.handleChangeFor('size')}
            value={this.props.newPlanet.size}
            type="text" placeholder="size"/>
          <input type="submit" value="submit" onClick={this.props.handlePlanetSubmit}/>
        </form>

      </section>
    );
  }
}

export default AddPlanet;
