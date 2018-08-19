import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio animated fadeIn">
        <h1>Portfolio</h1>
        <p>Please note that my portfolio pieces are hosted on a free Heroku account, the servers they are hosted on enter a 'sleep' mode when not in use. If you notice a delay, please allow a few seconds for the server to wake up. Thank you.</p>
      </div>
    );
  }
}

export default Portfolio;