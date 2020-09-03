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
import QuestionAnswerPage from './scences/question/QuestionAnswerPage'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { connect } from 'react-redux'

class BaseRouter extends Component {
  render() {
    return (
      <Router>
        <BaseNavbar currentPage={this.props.pageManagement.pageIndex}/>
        <MessengerCustomerChat
          pageId="650345821735744"
          appId="2298204780304696"
        />
        <div>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/howto">
              <HowToBuy />
            </Route>
            <Route exact path="/question">
              <QuestionAnswerPage />
            </Route>
          </Switch>
        </div>
        <div className="bottom-height"></div>
      </Router>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    pageManagement: state.PageManagement
  }
}
const AppWithConnect = connect(mapStateToProps, { })(BaseRouter)
export default AppWithConnect
