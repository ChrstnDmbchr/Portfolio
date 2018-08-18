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
        <h1 
          onClick={() => this.setActive('about')} 
          className={activeNav === 'about' ? 'nav-item-active' : 'nav-item'}
        ><Link to={'/'}>About</Link></h1>

        <h1 
          onClick={() => this.setActive('portfolio')} 
          className={activeNav === 'portfolio' ? 'nav-item-active' : 'nav-item'}
        ><Link to={'/portfolio'}>Portfolio</Link></h1>

        <h1 
          onClick={() => this.setActive('contact')} 
          className={activeNav === 'contact' ? 'nav-item-active' : 'nav-item'}
        ><Link to={'/contact'}>Contact</Link></h1>
      </div>
    );
  }
}

export default Nav;