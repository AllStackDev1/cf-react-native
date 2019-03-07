import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from '../../constants/actionTypes';

export const login = (user, history) => ({
    type: LOGIN,
    payload: { user, history }
});
export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: user
});
export const loginError = error => ({
    type: LOGIN_ERROR,
    payload: error
});
