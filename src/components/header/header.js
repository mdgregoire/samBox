import React, { Component } from 'react';
import './header.css';

class Header extends Component {

constructor(props) {
  super(props); //do this everytime, or things won't work right

  this.state = {title: props.title};
}

  render() {
    return (
        <header className="header">
          <h1 className="title">{this.state.title}</h1>
        </header>
    );
  }
}

export default Header;
