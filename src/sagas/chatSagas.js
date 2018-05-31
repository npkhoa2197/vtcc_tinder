import {
  takeEvery,
  takeLatest,
  take,
  put,
  call,
  fork,
  cancelled,
  cancel,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from 'firebase';
import { firestore } from '../utilities/configFirebase';
import {
  ACTIVE_MESSAGE_ADDED,
  ACTIVE_MESSAGE_CHANGED,
  ACTIVE_MESSAGE_REMOVED,
  FETCH_ACTIVE_MESSAGE_REQUEST,
  STOP_FETCH_ACTIVE_MESSAGE_REQUEST,
  FETCH_CHAT_REQUEST,
  CHAT_REQUEST_ADDED,
  CHAT_REQUEST_CHANGED,
  CHAT_REQUEST_REMOVED,
  STOP_FETCH_CHAT_REQUEST,
  INIT_CHAT_THREAD_SUCCESS,
  INIT_CHAT_THREAD_FAIL,
  INIT_CHAT_THREAD_REQUEST,
  CHAT_MESSAGE_ADDED,
  CHAT_MESSAGE_REMOVED,
  STOP_FETCH_CHAT_MESSAGE_REQUEST,
  FETCH_CHAT_MESSAGE_REQUEST,
  CHECK_SEEN_MESSAGE_REQUEST,
  CHECK_SEEN_MESSAGE_SUCCESS,
  CHAT_MESSAGE_CHANGED,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  SEND_MESSAGE_REQUEST,
} from '../constants/strings/actionTypes';
import chatIdCreator from '../helpers/chatIdCreator';

function createFetchActiveMessageChannel() {
  return eventChannel((emit) => {
    const { uid } = firebase.auth().currentUser;

    const activeChatsRef = firestore
      .collection('activeChats')
      .doc(uid)
      .collection('chats');

    const unsubscribe = activeChatsRef.onSnapshot((snapshots) => {
      snapshots.docChanges().forEach((change) => {
        if (change.type === 'added') {
          emit({
            type: ACTIVE_MESSAGE_ADDED,
            payload: { ...change.doc.data(), id: change.doc.id },
          });
        } else if (change.type === 'modified') {
          emit({
            type: ACTIVE_MESSAGE_CHANGED,
            payload: { ...change.doc.data(), id: change.doc.id },
          });
        } else if (change.type === 'removed') {
          emit({
            type: ACTIVE_MESSAGE_REMOVED,
            payload: { ...change.doc.data(), id: change.doc.id },
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
    yield take(STOP_FETCH_ACTIVE_MESSAGE_REQUEST);
    yield cancel(task);
  } finally {
    yield cancel(task);
  }
}

export function* watchFetchActiveMessageRequest() {
  yield takeEvery(FETCH_ACTIVE_MESSAGE_REQUEST, watchFetchActiveMessage);
}

// ------------------------------------------

function createFetchChatRequestChannel() {
  return eventChannel((emit) => {
    const { uid } = firebase.auth().currentUser;

    const chatRequestsRef = firestore
      .collection('pendingChats')
      .doc(uid)
      .collection('chats');

    const unsubscribe = chatRequestsRef.onSnapshot((snapshots) => {
      snapshots.docChanges().forEach((change) => {
        if (change.type === 'added') {
          emit({
            type: CHAT_REQUEST_ADDED,
            payload: { ...change.doc.data(), id: change.doc.id },
          });
        } else if (change.type === 'modified') {
          emit({
            type: CHAT_REQUEST_CHANGED,
            payload: { ...change.doc.data(), id: change.doc.id },
          });
        } else if (change.type === 'removed') {
          emit({
            type: CHAT_REQUEST_REMOVED,
            payload: { ...change.doc.data(), id: change.doc.id },
          });
        }
      });
    });

    return unsubscribe;
  });
}

function* watchFetchChatRequestChannel() {
  const fetchChatRequestChannel = yield call(createFetchChatRequestChannel);
  try {
    while (true) {
      const action = yield take(fetchChatRequestChannel);
      yield put(action);
    }
  } finally {
    if (yield cancelled()) {
      fetchChatRequestChannel.close();
    }
  }
}

function* watchFetchChatRequest() {
  const task = yield fork(watchFetchChatRequestChannel);

  try {
    yield take(STOP_FETCH_CHAT_REQUEST);
    yield cancel(task);
  } finally {
    yield cancel(task);
  }
}

export function* watchFetchChatRequestRequest() {
  yield takeEvery(FETCH_CHAT_REQUEST, watchFetchChatRequest);
}

// ------------------------------------------

function fetchChatMessageChannel(chatDocId) {
  return eventChannel((emit) => {
    const chatMessagesRef = firestore
      .collection('chats')
      .doc(chatDocId)
      .collection('messages');

    const unsubscribe = chatMessagesRef.onSnapshot((snapshots) => {
      snapshots.docChanges().forEach((change) => {
        if (change.type === 'added') {
          emit({
            type: CHAT_MESSAGE_ADDED,
            payload: { ...change.doc.data(), id: change.doc.id },
          });
        } else if (change.type === 'modified') {
          emit({
            type: CHAT_MESSAGE_CHANGED,
            payload: { ...change.doc.data(), id: change.doc.id },
          });
        } else if (change.type === 'removed') {
          emit({
            type: CHAT_MESSAGE_REMOVED,
            payload: { ...change.doc.data(), id: change.doc.id },
          });
        }
      });
    });

    return unsubscribe;
  });
}

function* watchFetchChatMessageChannel(chatDocId) {
  const chatMessageChannel = yield call(fetchChatMessageChannel, chatDocId);

  try {
    while (true) {
      const action = yield take(chatMessageChannel);
      yield put(action);
    }
  } finally {
    if (yield cancelled()) {
      chatMessageChannel.close();
    }
  }
}

function* watchFetchChatMessage(action) {
  const task = yield fork(watchFetchChatMessageChannel, action.payload);
  try {
    yield take(STOP_FETCH_CHAT_MESSAGE_REQUEST);
    yield cancel(task);
  } finally {
    yield cancel(task);
  }
}

export function* watchFetchChatMessageRequest() {
  yield takeLatest(FETCH_CHAT_MESSAGE_REQUEST, watchFetchChatMessage);
}

// -------------------------------------------

function* createNewChatThread({ payload }) {
  const { uid1, uid2 } = payload;
  const docId = chatIdCreator(uid1, uid2);
  const chatsRef = firestore.collection('chats').doc(docId);
  try {
    yield call([chatsRef, chatsRef.set], { participants: { [uid1]: true } }, { merge: true });
    yield put({ type: INIT_CHAT_THREAD_SUCCESS });
    const task = yield fork(watchFetchChatMessageChannel, docId);
    yield take(STOP_FETCH_CHAT_MESSAGE_REQUEST);
    yield cancel(task);
  } catch (e) {
    yield put({ type: INIT_CHAT_THREAD_FAIL, payload: e.message });
  }
}

// function* createNewChatThread({ payload }) {
//   const { uid1, uid2 } = payload;
//   const docId = chatIdCreator(uid1, uid2);
//   const chatsRef = firestore.collection('chats').doc(docId);
//   try {
//     yield call([chatsRef, chatsRef.set], { participants: { [uid1]: true } }, { merge: true });
//     yield put({ type: INIT_CHAT_THREAD_SUCCESS });
//   } catch (e) {
//     yield put({ type: INIT_CHAT_THREAD_FAIL, payload: e.message });
//   }
// }

export function* watchCreateNewChatThreadRequest() {
  yield takeLatest(INIT_CHAT_THREAD_REQUEST, createNewChatThread);
}

// -------------------------------------------

function* checkSeenMessage({ payload }) {
  const { chatDocId, messageId } = payload;
  const messageRef = firestore
    .collection('chats')
    .doc(chatDocId)
    .collection('messages')
    .doc(messageId);

  try {
    yield call([messageRef, messageRef.update], { seen: true });
    yield put({ type: CHECK_SEEN_MESSAGE_SUCCESS, payload: messageId });
  } catch (e) {
    console.log(e.message);
  }
}

export function* watchCheckSeenMessageRequest() {
  yield takeEvery(CHECK_SEEN_MESSAGE_REQUEST, checkSeenMessage);
}

// -------------------------------------------

function* sendMessage({ payload }) {
  const { chatDocId, senderid, body } = payload;
  const chatRef = firestore
    .collection('chats')
    .doc(chatDocId)
    .collection('messages');

  try {
    yield call([chatRef, chatRef.add], {
      senderid,
      body,
      seen: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    yield put({ type: SEND_MESSAGE_SUCCESS });
  } catch (e) {
    console.log(e.message);
    yield put({ type: SEND_MESSAGE_FAIL, payload: e.message });
  }
}

export function* watchSendMessageRequest() {
  yield takeEvery(SEND_MESSAGE_REQUEST, sendMessage);
}
