import React, { Component } from 'react';
// import './App.css';
// import Header from '../header/header'

class AddStar extends Component {

  render() {
    return (
      <section>
        <h2>Add Star</h2>
        <form>
          <input onChange={this.props.handleChangeFor('name')}
            value={this.props.newStar.name}
            type="text" placeholder="name"/>
          <input onChange={this.props.handleChangeFor('magnitude')}
            value={this.props.newStar.magnitude}
            type="text" placeholder="magnitude"/>
          <input type="submit" value="submit" onClick={this.props.handleSubmit}/>
        </form>

      </section>

    );
  }
}

export default AddStar;
