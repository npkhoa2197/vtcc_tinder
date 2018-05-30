import {
  FETCH_ACTIVE_MESSAGE_REQUEST,
  FETCH_ACTIVE_MESSAGE_SUCCESS,
  FETCH_ACTIVE_MESSAGE_FAIL,
} from '../constants/strings/actionTypes';

export const requestFetchActiveMessage = () => ({
  type: FETCH_ACTIVE_MESSAGE_REQUEST,
});

export const fetchActiveMessageSuccess = messages => ({
  type: FETCH_ACTIVE_MESSAGE_SUCCESS,
  payload: messages,
});

export const fetchActiveMessageFail = errorMsg => ({
  type: FETCH_ACTIVE_MESSAGE_FAIL,
  payload: errorMsg,
});
