import { takeEvery, take, put, call, fork, cancelled, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from 'firebase';
import { firestore } from '../utilities/configFirebase';
import {
  ACTIVE_MESSAGE_ADDED,
  ACTIVE_MESSAGE_CHANGED,
  ACTIVE_MESSAGE_REMOVE,
  FETCH_ACTIVE_MESSAGE_REQUEST,
  STOP_FETCH_ACTIVE_MESSAGE_REQUEST,
} from '../constants/strings/actionTypes';

function createFetchActiveMessageChannel() {
  return eventChannel((emit) => {
    const { uid } = firebase.auth().currentUser;

    const usersRef = firestore
      .collection('activeChats')
      .doc(uid)
      .collection('chats');

    const unsubscribe = usersRef.onSnapshot((snapshots) => {
      snapshots.docChanges().forEach((change) => {
        if (change.type === 'added') {
          emit({
            type: ACTIVE_MESSAGE_ADDED,

            payload: { ...change.doc.data(), id: change.doc.key },
          });
        } else if (change.type === 'modified') {
          emit({
            type: ACTIVE_MESSAGE_CHANGED,

            payload: { ...change.doc.data(), id: change.doc.key },
          });
        } else if (change.type === 'removed') {
          emit({
            type: ACTIVE_MESSAGE_REMOVE,

            payload: { ...change.doc.data(), id: change.doc.key },
          });
        }
      });
    });

    return unsubscribe;
  });
}

function* watchFetchActiveMessageChannel() {
  const fetchActiveMessageChannel = yield call(createFetchActiveMessageChannel);
  try {
    while (true) {
      const action = yield take(fetchActiveMessageChannel);
      yield put(action);
    }
  } finally {
    if (yield cancelled()) {
      fetchActiveMessageChannel.close();
    }
  }
}

function* watchFetchActiveMessage() {
  const task = yield fork(watchFetchActiveMessageChannel);

  try {
    while (true) {
      yield take(STOP_FETCH_ACTIVE_MESSAGE_REQUEST);
      yield cancel(task);
      break;
    }
  } finally {
    yield cancel(task);
  }
}

export function* watchFetchActiveMessageRequest() {
  yield takeEvery(FETCH_ACTIVE_MESSAGE_REQUEST, watchFetchActiveMessage);
}
