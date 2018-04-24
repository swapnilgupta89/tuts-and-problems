import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/products/Products';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products : []
    };
  }
  componentDidMount(){
    axios.get(`http://demo1853299.mockable.io/products`)
      .then(res => {
        //console.log(res);
        const products = (res.status === 200) ? res.data.products : [];
        this.setState({products});
      });
  }
  render() {
    return (
      <section>
        <Products products = {this.state.products}/>
      </section>
    );
  }
}

export default App;
