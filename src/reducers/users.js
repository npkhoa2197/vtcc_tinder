import {
  FETCHUSER_PENDING,
  FETCHUSER_SUCCESS,
  FETCHUSER_FAIL,
} from '../constants/strings/actionTypes';

const users = (
  state = {
    users: [],
    isFetchingUsers: false,
  },
  action,
) => {
  switch (action.type) {
    case FETCHUSER_PENDING:
      return { ...state, isFetchingUsers: true };
    case FETCHUSER_SUCCESS:
      return { users: action.payload, isFetchingUsers: false };
    case FETCHUSER_FAIL:
      return { ...state, isFetchingUsers: false };
    default:
      return state;
  }
};

export default users;
