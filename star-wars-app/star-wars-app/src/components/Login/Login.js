import React, {Component} from 'react';
import Input from "../Input/Input";
import Button from "../Button/Button";
import axios from 'axios';
import './Login.css';
import {connect} from "react-redux";
import { loginUser } from "../../actions/loginActions";

class Login extends Component{
  constructor(){
    super();
    this.state={
      users:[],
      username:"",
      password:"",
      errorText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loginState === true){
      this.props.history.push('/search');
    }
    else{
      this.setState({
        errorText: "Username or Password are incorrect"
      });
    }
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const {users, username, password} = this.state;
    this.props.dispatch(loginUser({username, password}));
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="login">
        <h1>Login</h1>
        <Input classValue="username" handleChange={this.handleChange} inputType="text"/>
        <Input classValue="password" handleChange={this.handleChange} inputType="password"/>
        <Button classValue="submit" text="Submit"/>
        <p>{this.state.errorText}</p>
      </form>
    )
  }
}


const mapStateToProps = (state) => {
  return {loginState: state.login.loginState};
};
export default connect(mapStateToProps)(Login);
