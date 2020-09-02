import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BaseNavbar from './BaseComponent/BaseNavbar'
import Landing from './scences/landing/Landing'
import HowToBuy from './scences/howtobuy/HowToBuy'

class BaseRouter extends Component {
  render() {
      return (
      <Router>
        <BaseNavbar />
        <div>
          <Switch>
            <Route exact path="/">
                <Landing />
            </Route>
            <Route path="/howto">
                <HowToBuy />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default BaseRouter;
