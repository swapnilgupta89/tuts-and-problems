import {LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR} from '../constants/constants';

let loginReducer = (state = {loginState: false}, action) => {
    switch(action.type){
        case LOGIN_USER_SUCCESS: console.log("success");return action.data;
        case LOGIN_USER_ERROR: console.log("failure");return action.data;
        default:
            return state;
    }
}

export default loginReducer;
