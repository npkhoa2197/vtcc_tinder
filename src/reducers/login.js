import {
  REGISTER_PENDING,
  REGISTER_SUCESS,
  REGISTER_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from '../constants/strings/actionTypes';

const login = (
  state = {
    error: '',
    isLoggedIn: false,
    isLoggingIn: false,
  },
  action,
) => {
  switch (action.type) {
    case REGISTER_PENDING:
    case LOGIN_PENDING:
      return { ...state, isLoggingIn: true, error: '' };
    case REGISTER_SUCESS:
    case LOGIN_SUCCESS:
      return { error: '', isLoggedIn: true, isLoggingIn: false };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return { ...state, isLoggingIn: false, error: action.payload };
    case LOGOUT_SUCCESS:
      return { ...state, isLoggedIn: false };
    case LOGOUT_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default login;
