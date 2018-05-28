import { call, take, put, cancelled, fork, cancel, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from 'firebase';
import { NEW_MESSAGE, STOP_REQUEST_CHAT, REQUEST_CHAT } from '../actions';

function createChatChannel(id1, id2) {
  return eventChannel((emit) => {
    const chatHistoryRef = firebase.database().ref(`chats/${id1}_${id2}`);

    const chatListener = chatHistoryRef.on('child_added', (childSnapshot) => {
      emit({
        type: NEW_MESSAGE,
        payload: { ...childSnapshot.val(), id: childSnapshot.key },
      });
    });

    const unsubscribe = () => chatHistoryRef.off('child_added', chatListener);

    return unsubscribe;
  });
}

function* watchChatChannel(id1, id2) {
  const chatChannel = yield call(createChatChannel, id1, id2);

  try {
    while (true) {
      const action = yield take(chatChannel);
      yield put(action);
    }
  } finally {
    if (yield cancelled()) {
      chatChannel.close();
    }
  }
}

function* watchChat(action) {
  const task = yield fork(watchChatChannel, action.payload.id1, action.payload.id2);

  try {
    while (true) {
      const stopRequestAction = yield take(STOP_REQUEST_CHAT);

      if (
        (action.payload.id1 === stopRequestAction.payload.id1 &&
          action.payload.id2 === stopRequestAction.payload.id2) ||
        (action.payload.id1 === stopRequestAction.payload.id2 &&
          action.payload.id2 === stopRequestAction.payload.id1)
      ) {
        yield cancel(task);
        break;
      }
    }
  } finally {
    yield cancel(task);
  }
}

export function* watchChatRequest() {
  yield takeEvery(REQUEST_CHAT, watchChat);
}
