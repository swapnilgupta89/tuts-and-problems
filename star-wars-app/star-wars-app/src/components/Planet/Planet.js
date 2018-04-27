import React, {Component} from 'react';
import axios from 'axios';
import Logout from "../Logout/Logout";
import "./planet.css";

class Planet extends Component{
  constructor(){
    super();
    this.state = {
      planetDetail: {}
    }
  }
  componentDidMount(){
    if(sessionStorage.getItem("userId") === null){
      this.props.history.push('/');
    }
    else{
      const planetId = this.props.match.params.name;
      axios.get(`https://swapi.co/api/planets/${planetId}/`)
      .then(res => {
        const planetDetail = (res.status === 200) ? res.data : [];
        this.setState({
          planetDetail
        });
      });
    }
  }
  render(){
    const {name, rotation_period, diameter, population} = this.state.planetDetail;
    return(
      <section className="planet-details">
        <Logout displayText = "Logout" history = {this.props.history}/>
        <h1>Planet {name} Details</h1>
        <p>Rotation Period: {rotation_period}</p>
        <p>Diameter: {diameter}</p>
        <p>Population: {population}</p>
      </section>
    );
  }
}

export default Planet;
