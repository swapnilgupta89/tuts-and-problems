import React, {Component} from 'react';
import './logout.css';

class Logout extends Component{
  constructor(props){
    super(props);
    this.handleLogout =  this.handleLogout.bind(this);
  }
  handleLogout(){
    sessionStorage.removeItem("userId");
    this.props.history.push('/');
  }
  render(){
    return(
      <header>
        <a href="javascript:void(0);" onClick={this.handleLogout}>{this.props.displayText}</a>
      </header>
    )
  }
}

export default Logout;
