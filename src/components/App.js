import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../styling/App.css'

import Nav from './Nav';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends Component {
  // redirects added to work around issue of github pages not loading the about page first
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav />
          <div className="app-content">
            <Switch>
              <Route exact path='/' render={() => {
                return <Redirect to='/about' />
              }} />
              <Route exact path='/portfolio' render={() => {
                return <Redirect to='/about' />
              }} />
              <Route path='/about' component={About} />
              <Route path='/previouswork' component={Portfolio} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;