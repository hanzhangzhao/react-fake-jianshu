import axios from 'axios';
import * as ActionTypes from './ActionTypes';

const loginSuccess = () => ({
    type: ActionTypes.LOGIN_SUCCESS,
    value: true
})

export const loginUser = (username, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?username=' + username + '&password=' + password).then((res) => {
            const authenticate = res.data.data;
            if (authenticate) {
                dispatch(loginSuccess())
            }
            else {
                alert('Login failed')
            }
        })
    }
}

export const logoutUser = () => ({
    type: ActionTypes.LOGOUT,
    value: false
})

export const userName = () => ({
    type: ActionTypes.USERNAME,
    // value: 
})