import {
  FETCH_ACTIVE_MESSAGE_SUCCESS,
  FETCH_ACTIVE_MESSAGE_FAIL,
  ACTIVE_MESSAGE_ADDED,
} from '../constants/strings/actionTypes';

const chat = (
  state = {
    activeChats: [],
  },
  action,
) => {
  switch (action.type) {
    case FETCH_ACTIVE_MESSAGE_SUCCESS:
      return { activeChats: action.payload };
    case FETCH_ACTIVE_MESSAGE_FAIL:
      return { activeChats: [] };
    case ACTIVE_MESSAGE_ADDED:
      return { actionChats: [...state.activeChats, action.payload] };
    default:
      return state;
  }
};

export default chat;
