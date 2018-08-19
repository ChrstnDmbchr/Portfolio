import React, { Component } from 'react';
import '../styling/About.css'

class About extends Component {
  render() {
    return (
      <div className="about animated fadeIn">
        <h1 className="about-name">Christian Dambacher</h1>
        <h1 className="about-title">Full Stack Developer</h1>
        <img className="about-pic" src={require('../assets/picture.jpeg')} alt="Christian Dambacher" />
        <div className="container">
          <div className="columns">
            <div className="about-desc column is-two-thirds">
              <h1>about</h1>
            </div>
            <div className="about-skills column">
              <h1>skills</h1>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default About;