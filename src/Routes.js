import React, { Component } from 'react';
import { Home, About, List, Signup } from './pages/index.js'
import {
    BrowserRouter, Route, Switch
  } from 'react-router-dom';

  class Routes extends Component {
      render() {
          return (
          <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/about" component={About} />
            /*<Route path="/signup" component={Signup} />*/
            </Switch>
          </BrowserRouter>
          )
      }
  }

  export default Routes
