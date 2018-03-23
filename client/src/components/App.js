// using because import because babel/webpack can handle this
import React, { Component } from 'react';
import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};

const SurveyNew = () => {
  return <h2>SurveyNew</h2>;
};

// BrowserRouter only takes one child
// Pass in exact match so that the root doesn't greedily incorporate all other routes

class App extends Component {
  // componentWillMount is starting to get called multiple times, so we're sticking with Did, which is called once
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
