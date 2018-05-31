import {
  FETCH_ACTIVE_MESSAGE_FAIL,
  ACTIVE_MESSAGE_ADDED,
  CHAT_REQUEST_ADDED,
  CHAT_REQUEST_CHANGED,
  CHAT_REQUEST_REMOVED,
  ACTIVE_MESSAGE_CHANGED,
  ACTIVE_MESSAGE_REMOVED,
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
    case ACTIVE_MESSAGE_CHANGED:
      return {
        ...state,
        activeChats: state.activeChats.map((activeChat) => {
          if (activeChat.id === action.payload.id) {
            return { ...activeChat, ...action.payload };
          }
          return activeChat;
        }),
      };
    case ACTIVE_MESSAGE_REMOVED:
      return {
        ...state,
        activeChats: state.activeChats.filter(activeChat => activeChat.id !== action.payload.id),
      };
    case CHAT_REQUEST_ADDED:
      return { ...state, pendingChats: [...state.pendingChats, action.payload] };
    case CHAT_REQUEST_CHANGED:
      return {
        ...state,
        pendingChats: state.pendingChats.map((pendingChat) => {
          if (pendingChat.id === action.payload.id) {
            return { ...pendingChat, ...action.payload };
          }
          return pendingChat;
        }),
      };
    case CHAT_REQUEST_REMOVED:
      return {
        ...state,
        pendingChats: state.pendingChats.filter(pendingChat => pendingChat.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default chat;
