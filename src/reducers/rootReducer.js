import { combineReducers } from 'redux';
import login from './login';
import users from './users';
import chat from './chat';

const rootReducer = combineReducers({
  login,
  users,
  chat,
});

export default rootReducer;
