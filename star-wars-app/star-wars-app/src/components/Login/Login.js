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
  componentDidMount(){
    //Users Call
    console.log(this.props);
    /*if(sessionStorage.getItem("userId") !== null){
      console.log(this.history);
      this.props.history.push('/search');
    }
    else{
      axios.get(`https://swapi.co/api/people`)
      .then(res => {
        const users = (res.status === 200) ? res.data.results : [];
        this.setState({
          users
        });
      });
    }*/
  }

  componentWillReceiveProps(nextProps){
    //console.log(nextProps);
    debugger;
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

    /*if((username === "") || (password==="")){
      this.setState({
        errorText: "Username or Password field is empty"
      });
    }
    else{
      this.setState({
        errorText: ""
      });
      let isUserPresent = users.filter(elem => {
        if((username === elem.name) && (password === elem.birth_year))
          return true;
      });
      if(isUserPresent.length){
        let userIdArray = isUserPresent[0].url.split("/"),
            userId = userIdArray[userIdArray.length - 2];
        sessionStorage.setItem("userId", userId);
        this.props.history.push('/search');
      }
      else{
        this.setState({
          errorText: "Username or Password are incorrect"
        });
      }
    }*/
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
  console.log(state);
  return {loginState: state.login.loginState};
};
export default connect(mapStateToProps)(Login);
