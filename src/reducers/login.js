import {
  REGISTER_PENDING,
  REGISTER_SUCESS,
  REGISTER_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
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
      return { ...state, isLoggingIn: true };
    case REGISTER_SUCESS:
    case LOGIN_SUCCESS:
      return { isLoggedIn: true, isLoggingIn: false };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return { ...state, isLoggingIn: false, error: action.payload };
    default:
      return state;
  }
};

export default login;
