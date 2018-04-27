import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Planet from './components/Planet/Planet';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/search" component={Search}/>
        <Route path="/planet/:name" component={Planet}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
