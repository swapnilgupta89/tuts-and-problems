import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Planet from './components/Planet/Planet';
import setupStore from './store/store';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';



const store = setupStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/search" component={Search}/>
          <Route path="/planet/:name" component={Planet}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
