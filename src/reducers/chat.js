import {
  FETCH_ACTIVE_MESSAGE_FAIL,
  ACTIVE_MESSAGE_ADDED,
  CHAT_REQUEST_ADDED,
} from '../constants/strings/actionTypes';

const chat = (
  state = {
    activeChats: [],
    pendingChats: [],
  },
  action,
) => {
  switch (action.type) {
    case FETCH_ACTIVE_MESSAGE_FAIL:
      return { ...state, activeChats: [] };
    case ACTIVE_MESSAGE_ADDED:
      return { ...state, activeChats: [...state.activeChats, action.payload] };
    case CHAT_REQUEST_ADDED:
      return { ...state, pendingChats: [...state.pendingChats, action.payload] };
    default:
      return state;
  }
};

export default chat;
