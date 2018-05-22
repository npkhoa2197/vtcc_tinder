import { LOGIN_REQUEST, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL, RECEIVE_USERNAME } from './types';

export const requestLogin = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const loginPending = () => ({ type: LOGIN_PENDING });

export const loginSuccess = (token, username) => ({
  type: LOGIN_SUCCESS,
  payload: { token, username },
});

export const loginFail = errMsg => ({ type: LOGIN_FAIL, payload: errMsg });

export const receiveUsername = username => ({
  type: RECEIVE_USERNAME,
  payload: username,
});
