import React, { Component } from 'react';
import AddStar from '../../components/add_star/add_star'
import StarList from '../../components/star_list/star_list'

class Stars extends Component {

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
  console.log(this.state.newStar, 'newstar');
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
      <div className="Stars">
        <h2>Stars!!!</h2>
        <AddStar newStar={this.state.newStar} handleChangeFor={this.handleChangeFor} handleSubmit={this.handleSubmit}/>
        <StarList starsArray={this.state.starsArray}/>
      </div>
    );
  }

}//end class

export default Stars;
