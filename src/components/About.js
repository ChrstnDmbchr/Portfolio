import React, { Component } from 'react';
import '../styling/About.css'

class About extends Component {
  render() {
    return (
      <div className="about animated fadeIn">
        <h1 className="about-name">Christian Dambacher</h1>
        <h1 className="about-title">Full Stack Developer</h1>
        <img className="about-pic" src={require('../assets/picture.jpeg')} alt="Christian Dambacher" />
        <div>
          <a href="https://www.linkedin.com/in/christian-dambacher-0b988116a"> <i className="about-link fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
          <a href="https://github.com/ChrstnDmbchr"> <i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
        </div>
        <div className="about-content container">
          <div className="columns">
            <div className="about-desc column is-three-fifths">
              <h1 className="title">Hi, so here is a bit about me.</h1>
              <p>I am a professional, enthusiastic and organised individual who has recently finished an intensive full-stack developer course at <a href="https://northcoders.com/">Northcoders</a>. I am a Microsoft and ITIL certified individual with over 8 years experience in IT Support and Administration who is looking for a change in careers.</p>
              <p>While assisting on several projects in my previous role I discovered my passion in development and am seeking a role which will allow me to grow my newly acquired skills and knowledge in the field.</p>
            </div>
            <div className="about-skills column">
              <h1 className="title">Technical Skills</h1>
              <div className="about-skills-list">
                <div>
                  <p className="skill-title">Languages:</p>
                  <ul className="about-skill-list">
                    <li>Javascript</li>
                  </ul>
                </div>
                <br />
                <div>
                  <p className="skill-title">Back End:</p>
                  <ul className="about-skill-list">
                    <li>NodeJs</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>SQL</li>
                    <li>Express</li>
                  </ul>
                </div>
                <br />
                <div>
                  <p className="skill-title">Front End:</p>
                  <ul className="about-skill-list">
                    <li>ReactJs</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bulma</li>
                  </ul>
                </div>
                <br />
                <div>
                  <p className="skill-title">Testing:</p>
                  <ul className="about-skill-list">
                    <li>Mocha</li>
                    <li>Chai</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;