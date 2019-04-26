import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from './components/header';

import Home from './pages/home';
import Second from './pages/second';

import { doSomeAction, doSomeAjaxAction } from './actions/test';

@connect((store) => {
  return {
    test: store.test
  };
})
export default class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(doSomeAction());
    dispatch(doSomeAjaxAction());
  }
  render() {
    return (
      <Router>
        <div className="layout">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/second" exact component={Second} />
        </div>
      </Router>
    )
  }
}