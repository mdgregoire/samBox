import React, { Component } from 'react';

class StarList extends Component {


  render() {
    return (
      <section>
        <h2> Star List </h2>
        <ul>
          {this.props.starsArray.map( (star) => <li>{star}</li>)}
        </ul>
      </section>
    );
  }
}

export default StarList;
