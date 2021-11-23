import axios from 'axios';
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS
} from './types';
import Cookies from 'js-cookie';
import { load_user } from './profile';

export const checkAuthenticated = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            
        }
    };

    

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/accounts/authenticated`,  config);

        if(res.data.error || res.data.isAuthenticated === 'error') {
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: false
            })
        }
        else if (res.data.isAuthenticated === 'success') {
            dispatch({
                type: AUTHENTICATED_SUCCESS,
                payload: true
            })
        }
        

        else {
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: false
            })
        }
    } catch(err) {
        dispatch({
            type: AUTHENTICATED_FAIL,
            payload: false
        })
    }
};

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({ username, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/login`, body, config);

        if (res.data.success) {
            dispatch({
                type: LOGIN_SUCCESS
            });

            dispatch(load_user());
        } else {
            dispatch({
                type: LOGIN_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

export const logout = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({
        'withCredentials': true
    })

 

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/logout`, body, config)

        if(res.data.success) {
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: res.data.username
            });

            //load the user
        } else {
            dispatch({
                type: LOGOUT_FAIL
            })
        }
    } catch(err) {
        dispatch({
            type: LOGOUT_FAIL
        })
    }
}


export const register = (username, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({ username, password, re_password});

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/register`, body, config);

        if (res.data.error) {
            dispatch({
                type: REGISTER_FAIL
            })
        } else {
            dispatch({
                type: REGISTER_SUCCESS
            })
        }
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        })
    }
}