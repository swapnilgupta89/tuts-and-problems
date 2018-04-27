import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class SearchResults extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {filteredPlanets} = this.props;

    let sortedArray = filteredPlanets.sort((a, b) => {
      return a.population < b.population;
    });

    let planetsArray = sortedArray.map((elem, i) => {
        let planetIdArray = elem.url.split("/"),
            planetId = planetIdArray[planetIdArray.length - 2],
            planetStyle = {
              fontSize: 10*(sortedArray.length-i) + "px"
            };
        return <li key={i} className={`font${i}`} style={planetStyle}><Link to={`/planet/${planetId}`}>{elem.name}</Link></li>
    });
    return(
      <ul>
        {planetsArray}
      </ul>
    );
  }
}

export default SearchResults;
