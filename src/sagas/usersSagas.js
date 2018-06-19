import { takeLatest, call, put } from 'redux-saga/effects';
import firebase from 'firebase';
import { firestore } from '../utilities/configFirebase';
import {
  FETCHUSER_REQUEST,
  FETCHUSER_PENDING,
  FETCHUSER_SUCCESS,
  FETCHUSER_FAIL,
} from '../constants/strings/actionTypes';

// function createFetchUserChannel() {
//   return eventChannel((emit) => {
//     const usersRef = firestore.collection('users');

//     const { uid } = firebase.auth().currentUser;

//     const unsubscribe = usersRef.onSnapshot((snapshots) => {
//       snapshots.forEach((snapshot) => {
//         if (snapshot.id !== uid) {
//           snapshot.docChanges().forEach((change) => {
//             if (change.type === 'added') {
//               emit({
//                 type: USER_ADDED,
//                 payload: { ...snapshot.val(), id: snapshot.key },
//               });
//             } else if (change.type === 'modified') {
//               emit({
//                 type: USER_CHANGED,
//                 payload: { ...snapshot.val(), id: snapshot.key },
//               });
//             } else if (change.type === 'removed') {
//               emit({
//                 type: USER_REMOVE,
//                 payload: { ...snapshot.val(), id: snapshot.key },
//               });
//             }
//           });
//         }
//       });
//     });

//     return unsubscribe;
//   });
// }

// function* watchFetchUserChannel() {
//   const fetchUserChannel = yield call(createFetchUserChannel);

//   try {
//     while (true) {
//       const action = take(fetchUserChannel);
//       yield put(action);
//     }
//   } finally {
//     if (yield cancelled()) {
//       fetchUserChannel.close();
//     }
//   }
// }

// function* watchFetchUser() {
//   const task = yield fork(watchFetchUserChannel);
//   try {
//     yield take(STOP_FETCHUSER_REQUEST);
//     yield cancel(task);
//   } finally {
//     if (yield cancelled()) {
//       yield cancel(task);
//     }
//   }
// }

// export function* watchFetchUserRequest() {
//   yield takeLatest(FETCHUSER_REQUEST, watchFetchUser);
// }

function* fetchUsers() {
  try {
    const usersRef = firestore.collection('users').orderBy('name');
    const { uid } = firebase.auth().currentUser;

    yield put({ type: FETCHUSER_PENDING });

    const snapshots = yield call([usersRef, usersRef.get]);

    const users = [];
    snapshots.forEach((snapshot) => {
      if (snapshot.id !== uid) {
        users.push({ ...snapshot.data(), id: snapshot.id });
      }
    });
    yield put({ type: FETCHUSER_SUCCESS, payload: users });
  } catch (e) {
    yield put({ type: FETCHUSER_FAIL, payload: e.message });
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCHUSER_REQUEST, fetchUsers);
}
