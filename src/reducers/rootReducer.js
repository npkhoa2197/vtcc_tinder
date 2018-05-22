import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import { AsyncStorage } from 'react-native';
import filter from './filter';
import onboard from './onboard';
import friends from './friends';
import login from './login';
import hotgirls from './hotgirls';
import comments from './comments';
import username from './username';
import chats from './chats';

// const rootConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['onboard'],
// };

// const loginConfig = {
//   key: 'login',
//   storage: AsyncStorage,
//   whitelist: ['isLoggedIn'],
// };

const rootReducer = combineReducers({
  filter,
  onboard,
  friends,
  login,
  hotgirls,
  comments,
  username,
  chats,
});

export default rootReducer;

// export default persistReducer(rootConfig, rootReducer);
