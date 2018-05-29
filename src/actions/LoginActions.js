import {
  REGISTER_SUCESS,
  REGISTER_PENDING,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../constants/strings/actionTypes';

export const requestRegister = (email, password) => ({
  type: REGISTER_REQUEST,
  payload: {
    email,
    password,
  },
});

export const registerPending = () => ({ type: REGISTER_PENDING });

export const registerSuccess = username => ({
  type: REGISTER_SUCESS,
  payload: username,
});

export const registerFail = errorMsg => ({ type: REGISTER_FAIL, payload: errorMsg });

export const requestLogin = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const loginPending = () => ({ type: LOGIN_PENDING });

export const loginSuccess = username => ({ types: LOGIN_SUCCESS, payload: username });

export const loginFail = errorMsg => ({ type: LOGIN_FAIL, payload: errorMsg });
