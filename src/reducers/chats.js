import {
  REQUEST_CHAT_PENDING,
  STOP_REQUEST_CHAT,
  REQUEST_CHAT_SUCCESS,
  NEW_MESSAGE,
} from '../actions';

const chats = (
  state = {
    isChatLoading: false,
    chats: [],
  },
  action,
) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return { ...state, chats: [...state.chats, action.payload] };
    case REQUEST_CHAT_PENDING:
      return { ...state, isChatLoading: true };
    case REQUEST_CHAT_SUCCESS:
      return { isChatLoading: false, chats: action.payload };
    case STOP_REQUEST_CHAT:
      return { ...state, chats: [] };
    default:
      return state;
  }
};

export default chats;
