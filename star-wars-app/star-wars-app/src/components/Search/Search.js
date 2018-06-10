import React, {Component} from 'react';
import axios from 'axios';
import Input from "../Input/Input";
import SearchResults  from '../SearchResults/SearchResults';
import Logout from "../Logout/Logout";
import {connect} from "react-redux";
import './search.css';

class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      planets: [],
      filteredPlanets:[]
    }
    this.handleChange =  this.handleChange.bind(this);
  }
  componentDidMount(){
    if(!this.props.loginState){
      this.props.history.push('/');
    }
    else{
      //Users Call
      axios.get(`https://swapi.co/api/planets`)
      .then(res => {
        const planets = (res.status === 200) ? res.data.results : [];
        this.setState({
          planets
        });
      });
    }
  }
  handleChange(event){
    let filteredPlanets = [];
    let searchQuery = event.target.value;
    const {planets} = this.state;
    if(searchQuery.length){
      filteredPlanets = planets.filter(elem => {
        return (elem.name.toLowerCase().indexOf(searchQuery.toLowerCase())> -1);
      });
    }
    this.setState({
      filteredPlanets
    });
  }
  render(){
    return(
      <section className="search">
        <Logout displayText = "Logout" history = {this.props.history}/>
        <form>
          <h1>Search</h1>
          <section className="search-area">
            <Input classValue="search" handleChange={this.handleChange} inputType="text"/>
            <SearchResults filteredPlanets = {this.state.filteredPlanets}/>
          </section>
        </form>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  debugger;
  console.log(state);
  return {loginState: state.login.loginState};
};
export default connect(mapStateToProps)(Search);
