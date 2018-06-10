import {LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR} from '../constants/constants';
var ReduxThunk = require('redux-thunk').default;
import axios from 'axios';

export const loginUser = (data) => {
  return dispatch => {
    axios.get(`https://swapi.co/api/people`)
    .then(res => {
      const users = (res.status === 200) ? res.data.results : [];
      var flag = 0;
      let isUserPresent = users.filter(elem => {
        if((data.username === elem.name) && (data.password === elem.birth_year))
          return true;
      });
      if(isUserPresent.length){
        dispatch(loginUserSuccess({loginState:true}));
      }
      else{
        dispatch(loginUserError({loginState:false}));
      }
    });
  }
}


export const loginUserSuccess = (data) => {
    return {
        type: LOGIN_USER_SUCCESS,
        data: data
    }
}


export const loginUserError = (data) => {
    return {
        type: LOGIN_USER_ERROR,
        data: data
    }
}
