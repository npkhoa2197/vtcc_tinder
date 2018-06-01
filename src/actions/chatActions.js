import {
  FETCH_ACTIVE_MESSAGE_REQUEST,
  FETCH_CHAT_REQUEST,
  INIT_CHAT_THREAD_REQUEST,
  FETCH_CHAT_MESSAGE_REQUEST,
  STOP_FETCH_CHAT_MESSAGE_REQUEST,
  CHECK_SEEN_MESSAGE_REQUEST,
  SEND_MESSAGE_REQUEST,
} from '../constants/strings/actionTypes';

export const requestFetchActiveMessage = () => ({
  type: FETCH_ACTIVE_MESSAGE_REQUEST,
});

export const requestFetchChatRequest = () => ({
  type: FETCH_CHAT_REQUEST,
});

export const requestCreateNewChatThread = (uid1, uid2) => ({
  type: INIT_CHAT_THREAD_REQUEST,
  payload: {
    uid1,
    uid2,
  },
});

export const requestFetchChatMessage = chatDocId => ({
  type: FETCH_CHAT_MESSAGE_REQUEST,
  payload: chatDocId,
});

export const stopRequestFetchChatMessage = () => ({
  type: STOP_FETCH_CHAT_MESSAGE_REQUEST,
});

export const requestCheckSeenMessage = (chatDocId, messageId) => ({
  type: CHECK_SEEN_MESSAGE_REQUEST,
  payload: {
    chatDocId,
    messageId,
  },
});

export const requestSendMessage = (chatDocId, senderId, body) => ({
  type: SEND_MESSAGE_REQUEST,
  payload: {
    chatDocId,
    senderId,
    body,
  },
});
