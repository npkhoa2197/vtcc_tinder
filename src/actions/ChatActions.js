import { REQUEST_CHAT, STOP_REQUEST_CHAT } from '.';

export const requestChatHistory = (id1, id2) => ({
  type: REQUEST_CHAT,
  payload: {
    id1,
    id2,
  },
});

export const stopRequestChat = (id1, id2) => ({
  type: STOP_REQUEST_CHAT,
  payload: {
    id1,
    id2,
  },
});
