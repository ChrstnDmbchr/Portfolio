import React, { Component } from 'react';
import '../styling/Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact animated fadeIn">
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/christian-dambacher-0b988116a"> <i className="about-link fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
          <a href="https://github.com/ChrstnDmbchr"> <i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
        </div>
        <h1 className="title contact-email">Email:<a className="contact-email-link" href="mailto:webmaster@example.com">christiandambacher@gmail.com</a></h1>
      </div>
    );
  }
}

export default Contact;