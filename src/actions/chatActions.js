import { FETCH_ACTIVE_MESSAGE_REQUEST, FETCH_CHAT_REQUEST } from '../constants/strings/actionTypes';

export const requestFetchActiveMessage = () => ({
  type: FETCH_ACTIVE_MESSAGE_REQUEST,
});

export const requestFetchChatRequest = () => ({
  type: FETCH_CHAT_REQUEST,
});
