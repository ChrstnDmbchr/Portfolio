import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import '../styling/Nav.css'

class Nav extends Component {
  state = {
    activeNav: 'about'
  }

  setActive = menuItem => {
    this.setState({
      activeNav: menuItem
    });
  };

  render() {
    const { activeNav } = this.state;
    return (
      <div className="nav">
        <Link to={'/about'} 
          className={activeNav === 'about' ? 'nav-item-active' : 'nav-item'}
          onClick={() => this.setActive('about')}
        >
          <h1>About</h1>
        </Link>

        <Link to={'/previouswork'} 
          className={activeNav === 'portfolio' ? 'nav-item-active' : 'nav-item'}
          onClick={() => this.setActive('portfolio')}
        >
          <h1>Portfolio</h1>
        </Link>

        <Link to={'/contact'} 
          className={activeNav === 'contact' ? 'nav-item-active' : 'nav-item'}
          onClick={() => this.setActive('contact')}
        >
          <h1>Contact</h1>
        </Link>
      </div>
    );
  }
}

export default Nav;