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
import MessengerCustomerChat from 'react-messenger-customer-chat';

class BaseRouter extends Component {
  render() {
    return (
      <Router>
        <BaseNavbar />
        <MessengerCustomerChat
          pageId="650345821735744"
          appId="2298204780304696"
        />,
        <div>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/howto">
              <HowToBuy />
            </Route>
          </Switch>
        </div>
        <div className="bottom-height"></div>
      </Router>
    );
  }
}
export default BaseRouter;
