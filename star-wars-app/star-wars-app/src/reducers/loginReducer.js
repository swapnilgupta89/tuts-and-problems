import {LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR} from '../constants/constants';

let loginReducer = (state, action) => {
    switch(action.type){
        case LOGIN_USER: 
        case LOGIN_USER_SUCCESS:
        case LOGIN_USER_ERROR:
        default:
            return state;
    }    
}

export default loginReducer;