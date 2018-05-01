import {LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR} from '../constants/constants';

export const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        data: data
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