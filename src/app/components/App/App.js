import React, { Component } from 'react';
import {Router, Route, hashHistory} from 'react-router';
import './App.css';
import PriceForm from '../PriceForm/PriceForm.js';
import Home from '../Home/Home.js';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/priceForm" component={PriceForm}/>
      </Router>
    );
  }
}

export default App;
