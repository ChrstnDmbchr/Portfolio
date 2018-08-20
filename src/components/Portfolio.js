import React, { Component } from 'react';
import '../styling/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio animated fadeIn container">
        <p className="portfolio-note">Please note that my portfolio pieces are hosted on a free Heroku account, the servers they are hosted on enter a 'sleep' mode when not in use. If you notice a delay, please allow a few seconds for the server to wake up. Thank you.</p>
        <div className="portfolio-display columns">

          <div className="portfolio-item column">
            <h1 className="title">Northcoders News</h1>
            <a href="https://ncnews-cdambacher.herokuapp.com" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={require('../assets/ncnews.png')} alt="northcoders news" /></a>
            <p>A Reddit-style news aggregation, web content rating and discussion website, developed as a full-stack project. Best viewed on a desktop.</p>
            <p><span className="portfolio-pronounced">Technologies used:</span></p>
            <p>
              <span className="portfolio-pronounced">Front End:</span> ReactJS, HTML, CSS, Bulma
              <br/>
              <span className="portfolio-pronounced">Back End:</span> NodeJS, MongoDB, Mongoose, Express
              <br/>
              <span className="portfolio-pronounced">Testing Technology used:</span> Mocha, Chai, Supertest
            </p>
          </div>

          <div className="portfolio-item column">
            <h1 className="title">Monster Mash</h1>
            <a href="https://monster-mash-app.herokuapp.com" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={require('../assets/monstermash.png')} alt="monster mash" /></a>
            <p>Monster Mash was my final individual project piece at Northcoders. It is a collaborative drawing web app which enables multiple users to anonymously contribute to creating a shared image. Responsible for Planning, Front End development, Back End development and deployment. Best viewed on a desktop.</p>
            <p><span className="portfolio-pronounced">Technologies used:</span></p>
            <p>
              <span className="portfolio-pronounced">Front End:</span> ReactJS, HTML, CSS, Bulma, HTML Canvas
              <br/>
              <span className="portfolio-pronounced">Back End:</span> NodeJS, MongoDB, Mongoose, Express
              <br/>
              <span className="portfolio-pronounced">Testing Technology used:</span> Mocha, Chai, Supertest
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default Portfolio;