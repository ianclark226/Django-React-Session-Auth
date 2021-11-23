/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    
    
} from '../actions/types';

const initialState = {
    isAuthenticated: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGOUT_SUCCESS:
        
            return {
                ...state,
                isAuthenticated: false
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        
            return state
        default:
            return state
    };
};