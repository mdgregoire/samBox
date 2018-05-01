import React, { Component } from 'react';
import './App.css';
import Header from '../header/header'
import AddStar from '../add_star/add_star'
import StarList from '../star_list/star_list'

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    newStar: {
      name: '',
      magnitude: '',
    },
    starsArray: [],
  }
}

handleChangeFor = (propertyName) => (event) => {
  this.setState(
    {
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value
      }
    }
  )
}

handleSubmit = (event) => {
  event.preventDefault();
  this.setState(
    {
      starsArray: [...this.state.starsArray, this.state.newStar],
      newStar: {
        name: '',
        magnitude: '',
      }
    }
  )
  console.log('Submit', this.state.starsArray);

}

  render() {
    return (
      <div className="App">
        <Header title="Gacrux_React_Astro"/>
        <AddStar newStar={this.state.newStar} handleChangeFor={this.handleChangeFor} handleSubmit={this.handleSubmit}/>
        <StarList starsArray={this.state.starsArray}/>
        <p> Star {this.state.newStar.name} has a magnitude of {this.state.newStar.magnitude}.</p>
      </div>
    );
  }

}//end class

export default App;
