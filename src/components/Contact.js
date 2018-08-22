import React, { Component } from 'react';
import '../styling/Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact animated fadeIn">
        <h1 className="title">It would be great to hear from you.</h1>

        <h1 className="contact-email">Email:<a className="contact-email-link" href="mailto:christiandambacher@gmail.com">christiandambacher@gmail.com</a></h1>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/christian-dambacher-0b988116a"> <i className="about-link fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
          <a href="https://github.com/ChrstnDmbchr"> <i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }
}

export default Contact;